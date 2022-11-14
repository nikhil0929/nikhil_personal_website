
import { Box, List, ListItem, Typography, Grid } from "@mui/material";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { styled } from '@mui/material/styles';
import Icosahedron from "./Components/Icosahedron";
import { useRef, useEffect, useLayoutEffect } from 'react'
import SelectionLink from "./Components/SelectionLink";
import { motion } from "framer-motion"


const StyledDiv = styled("div")({
    height: '100vh',
});

const StyledBox = styled(Box)({
    height: "800px",
    width: "1000px",
});


const NavItems = ["Home", "About", "Projects", "Social", "Resume"]

function HomePage() {

    const Links = (
        <Box sx={{
            border: '1px solid blue',
            marginLeft: "120px",
        }}>
            <List>
                {NavItems.map((item, index) => {
                    let calculatedPadding = 90
                    if (index <= Math.floor(NavItems.length / 2)) {
                        calculatedPadding -= (index * 45)
                    } else if (index > Math.floor(NavItems.length / 2)) {
                        calculatedPadding -= ((NavItems.length - 1) - index) * 45
                    } else {
                        calculatedPadding = 0
                    }

                    return (
                        <ListItem sx={{
                            paddingLeft: calculatedPadding + "px",
                        }}>
                            <SelectionLink props={item} />
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )

    const Camera = (props) => {
        const ref = useRef()
        const set = useThree((state) => state.set)
        useEffect(() => void set({ camera: ref.current }), [])
        useFrame(() => ref.current.updateMatrixWorld())
        return <perspectiveCamera ref={ref} {...props} />;
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid green',
            height: '100vh',
        }}>
            <StyledBox>
                <Grid container sx={{
                    height: '100%',
                }}>
                    <Grid item xs={3} sx={{
                        border: '1px solid red',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {Links}
                    </Grid>
                    <Grid item xs={9} sx={{
                        border: '1px solid red',
                    }}>
                        <Canvas>
                            {/* <Camera position={[-0.8, 0, 9]} /> */}
                            <ambientLight />
                            <pointLight position={[0, 0, 0]} />
                            <Icosahedron position={[-0.8, 0, 0]} />
                            {/* <Hand position={[0, 0, 4]} scale={4} /> */}
                        </Canvas>
                    </Grid>
                </Grid>
            </StyledBox>
        </Box>

    );
}

export default HomePage;