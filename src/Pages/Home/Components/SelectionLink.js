import { motion } from "framer-motion"
import { Link, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';



function SelectionLink({ props }) {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },

    }

    const thing = { whileHover: { scale: 1.1 } }


    const StyledLink = styled(Link)({
        color: 'white',
    });

    return (
        <motion.div
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 1 }}
        >
            <StyledLink href="#" underline="hover">
                <Typography variant="h3">
                    {props}
                </Typography>
            </StyledLink>
        </motion.div>
    )
}

export default SelectionLink;