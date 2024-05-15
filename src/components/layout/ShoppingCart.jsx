import { Box, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ShoppingCart = () => {
    // onClick={() => setOpen(true)}
    return (
        <Box sx={{
            padding: "20px",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1565c0",
            position: "fixed",
            bottom: "9px",
            right: "26px",
            zIndex: "12",
        }}>
            <ShoppingCartIcon sx={{ fontSize: "50px", color: "colors.white" }} />
            <Typography sx={{
                fontWeight: "bold",
                marginLeft: "10px",
                color: "colors.white"

            }}>{[].length}</Typography>
        </Box>
    )
}

export default ShoppingCart