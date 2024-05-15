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
import useShoppingCart from '../../hooks/useShoppingCart'
import ShoppingCartView from '../shoppingCart/ShoppingCartView'
import { useState } from 'react'

const PokemonsList = () => {
    const [open, setOpen] = useState(false)
    const { pokemons } = usePokemonsList()
    const { addPokemonShoppingCart } = useShoppingCart()
    const getPokemon = (pokemon) => {
        addPokemonShoppingCart(pokemon)
    }
    return (
        <Box sx={{ margin: "0 auto", maxWidth: "1200px", width: "95%" }}>
            <Box sx={{
                display: "grid",
                gridTemplateColumns:{ xs: "repeat(1,1fr)", md: "repeat(3,1fr)" },
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
                                <Button size="small" onClick={() => getPokemon(pokemon)}><ShoppingBasketIcon /></Button>
                                <Button size="small">Detalle del pokémon</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </Box>
            <ShoppingCart
                setOpen={setOpen}
            />
            <ShoppingCartView
                setOpen={setOpen}
                open={open}

            />
        </Box>



    )
}

export default PokemonsList