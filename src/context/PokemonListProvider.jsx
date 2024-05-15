import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../config/axios'

const PokemonListContext = createContext()

const PokemonListProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        try {
            const { data } = await api.get('/pokemon?offset=0&limit=20')
            getPokemonsDetails(data?.results)
        } catch (error) {
            console.log(error)
        }
    }
    const getPokemonsDetails = async (pokemons) => {
        if (pokemons.length === 0) return
        try {
            let resultsPokemonsDetails = []
            for (const pokemon of pokemons) {
                const { data } = await api.get(pokemon.url)
                const newPokemon = {
                    ...data,
                    price:  Math.floor(Math.random() * 1000) + 1,
                    quantity: 0,
                    total: 0,

                }
                resultsPokemonsDetails = [...resultsPokemonsDetails, newPokemon]
            }
            console.log(resultsPokemonsDetails)
            setPokemons(resultsPokemonsDetails)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <PokemonListContext.Provider
            value={{
                // state
                pokemons
                //metodos



            }}
        >{children}
        </PokemonListContext.Provider>
    )
}

export {
    PokemonListProvider
}
PokemonListProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default PokemonListContext