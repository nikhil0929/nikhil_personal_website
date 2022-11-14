
import { Grid, Paper, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion-3d"


const StyledLink = styled(Link)({
    color: 'white',
    position: 'relative',
    paddingLeft: '50px',

    // '&:before': {
    //     content: "''",
    //     position: 'absolute',
    //     width: '0',
    //     height: '2px',
    //     bottom: '-3px',
    //     left: '50%',
    //     transform: 'translate(-50%,0%)',
    //     backgroundColor: 'red',
    //     visibility: 'hidden',
    //     transition: 'all 0.3s ease-in-out',
    // },
    // '&:hover:before': {
    //     visibility: 'visible',
    //     width: '100%',
    // },
});


function Layout({ children }) {
    const NavBarItems = ["// Home", "// About", "// Projects", "// Social", "// Resume"];


    const NavBar = (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    {NavBarItems.map((item) => (
                        <StyledLink
                            underline="never"
                        >
                            <Typography
                                variant="h7"
                                component="div"
                            >
                                {item}
                            </Typography>
                        </StyledLink>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    )


    return (
        <div>
            {/* <Grid container spacing={3}>
                {NavBarItems}
            </Grid> */}
            {NavBar}
            {children}
        </div>
    );
}

export default Layout;