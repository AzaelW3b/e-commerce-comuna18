import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([])


    const addPokemonShoppingCart = (pokemon) => {
        const findPokemon = shoppingCart.find(item => item.id === pokemon.id)
        if (findPokemon) {
            findPokemon.quantity = findPokemon.quantity + 1
            findPokemon.total = findPokemon.price * findPokemon.quantity
            return
        }
        pokemon.quantity = 1
        pokemon.total = pokemon.price
        setShoppingCart([...shoppingCart, pokemon])
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                // state
                shoppingCart,
                //metodos
                addPokemonShoppingCart,
                setShoppingCart


            }}
        >{children}
        </ShoppingCartContext.Provider>
    )
}

export {
    ShoppingCartProvider
}
ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default ShoppingCartContext