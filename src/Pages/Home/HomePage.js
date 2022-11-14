
import { Grid, Paper, Typography, Box } from "@mui/material";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Icosahedron from "./Icosahedron";
import { useRef, useEffect } from 'react'

function HomePage() {

    const WelcomeMessage = (
        <Box sx={{
            textAlign: 'center',
            paddingTop: '150px',
        }}>
            <Box sx={{
                display: 'inline-block',
                textAlign: 'left',
            }}>
                <Typography variant="h1">
                    Welcome.
                </Typography>
                <Typography variant="h2">
                    I'm <b>Nikhil Aggarwal</b>.
                </Typography>
                <Typography variant="h3">
                    I'm a full-stack web developer.
                </Typography>
            </Box>
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
        <div>
            <Grid container sx={{
                height: "calc(100vh - 64px)",
            }}>
                <Grid item xs={6} sx={{
                    //border: '1px solid red',
                }}>
                    {WelcomeMessage}
                </Grid>
                <Grid item xs={6} sx={{
                    //border: '1px solid red',
                }}>
                    <Canvas>
                        {/* <Camera position={[0, 0, 3]} /> */}
                        <ambientLight />
                        <pointLight position={[0, 0, 0]} />
                        <Icosahedron position={[0, 0, 0]} />
                        {/* <Hand position={[0, 0, 4]} scale={4} /> */}
                    </Canvas>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;