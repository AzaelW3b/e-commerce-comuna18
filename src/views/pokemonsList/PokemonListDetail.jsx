import PropTypes from 'prop-types'
import { Dialog, DialogTitle, Typography, DialogContent, Box, Button, IconButton} from '@mui/material'
import usePokemonList from '../../hooks/usePokemonList'
import { formatCurrency } from '../../helpers/formatCurrency'
import useShoppingCart from '../../hooks/useShoppingCart'
import CloseIcon from '@mui/icons-material/Close'

const PokemonListDetail = ({ setOpenDetail, openDetail }) => {
    const { pokemonObject } = usePokemonList()
    const { addPokemonShoppingCart } = useShoppingCart()

    const handleClose = () => {
        setOpenDetail(false)
    }

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={openDetail}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>Detalles de {pokemonObject?.name}</Typography>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(2,1fr)" }
            }}>
                <Box>
                    <img
                        style={{ width: "300px" }}
                        src={pokemonObject?.sprites?.other?.home?.front_default}
                    />
                </Box>
                <Box>
                    <Typography variant="h1" sx={{
                        fontSize: "30px",
                        marginBottom: "10px"
                    }}>{pokemonObject?.name?.toUpperCase()}</Typography>
                    <Typography variant="body1" sx={{
                        fontSize: "20px",
                        marginBottom: "10px"
                    }}>{formatCurrency(pokemonObject?.price)}</Typography>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: "30% 30%"
                    }}>
                        <Typography variant="body1" sx={{
                            fontSize: "15px",
                        }}>Tamaño: {pokemonObject?.height}</Typography>
                        <Typography variant="body1" sx={{
                            fontSize: "15px",
                        }}>Peso: {pokemonObject?.weight}</Typography>
                    </Box>

                    <Button size="small" variant="contained" sx={{ mt: 2 }} onClick={() => addPokemonShoppingCart(pokemonObject)}>Agregar al carrito</Button>

                </Box>
            </DialogContent>
        </Dialog>
    )
}

PokemonListDetail.propTypes = {
    setOpenDetail: PropTypes.func.isRequired,
    openDetail: PropTypes.bool.isRequired,
}

export default PokemonListDetail