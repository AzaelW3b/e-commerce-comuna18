import PropTypes from 'prop-types'
import { Box, Button, Typography } from "@mui/material"
import { formatCurrency } from "../../helpers/formatCurrency"

const ShoppingCartDetail = ({ pokemon, increaseQuantity, decreaseQuantity }) => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(3,1fr)", md: "repeat(5,1fr)" }
            }}
            key={pokemon?.id}>
            <Box>
                <img style={{ width: "100px" }} src={pokemon?.sprites?.other?.home?.front_default} />
            </Box>
            <Box sx={{ marginLeft: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "20px" }}>{pokemon?.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{formatCurrency(pokemon?.total)}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{pokemon?.quantity}</Typography>
            </Box>
            <Box
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button sx={{
                    fontSize: "25px"
                }}
                    onClick={() => increaseQuantity(pokemon)}>
                    +
                </Button>
                <Button
                    sx={{
                        fontSize: "25px"
                    }}
                    onClick={() => decreaseQuantity(pokemon)}>-</Button>
            </Box>
        </Box>

    )
}

export default ShoppingCartDetail

ShoppingCartDetail.propTypes = {
    pokemon: PropTypes.object.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,

}