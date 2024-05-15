import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import usePokemonsList from '../../hooks/usePokemonList'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { formatCurrency } from '../../helpers/formatCurrency'
import ShoppingCart from '../../components/layout/ShoppingCart'
const PokemonsList = () => {
    const { pokemons } = usePokemonsList()

    const addPokemonShoppingCart = (pokemon) => {
        console.log(pokemon)
        // const productoExiste = carrito.find(item => item._id === producto._id)
        // if (productoExiste) {
        //   productoExiste.cantidad = productoExiste.cantidad + 1
        //   productoExiste.total = productoExiste.precio * productoExiste.cantidad
        //   return
        // }
        // producto.cantidad = 1
        // producto.total = producto.precio
    }
    return (
        <>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "20px"
            }}>
                {
                    pokemons.map(pokemon => (
                        <Card key={pokemon?.id} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image={pokemon?.sprites?.other?.home?.front_default}
                                title={pokemon?.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {`${pokemon?.name?.charAt(0)?.toUpperCase()}${pokemon?.name?.slice(1)} `}
                                    <span style={{ color: "gray" }}> {`#${pokemon?.order}`}</span>

                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: "18px" }} color="text.secondary">
                                    <b>{formatCurrency(pokemon?.price)}</b>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={()=>addPokemonShoppingCart(pokemon)}><ShoppingBasketIcon /></Button>
                                <Button size="small">Detalle del pokémon</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </Box>
            <ShoppingCart />
        </>



    )
}

export default PokemonsList