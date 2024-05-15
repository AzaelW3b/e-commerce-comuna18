import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../config/axios'

const PokemonListContext = createContext()

const PokemonListProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonObject, setPokemonObject] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(20)
    const [totalPages, setTotalPages] = useState(1)
    const [loadingPokemons, setLoading] = useState(false)

    useEffect(() => {
        const getPokemons = async () => {
            try {
                setLoading(true)
                const { data } = await api.get(`/pokemon?offset=${(currentPage - 1) * perPage}&limit=${perPage}`)
                setLoading(false)
                const totalPokemon = data.count
                const calculatedTotalPages = Math.ceil(totalPokemon / perPage)
                setTotalPages(calculatedTotalPages)
                getPokemonsDetails(data?.results)
            } catch (error) {
                console.log(error)
            }
        }
        getPokemons()
        console.log(currentPage)
    }, [perPage, currentPage])


    const getPokemonsDetails = async (pokemons) => {
        if (pokemons.length === 0) return
        try {
            let resultsPokemonsDetails = []
            for (const pokemon of pokemons) {
                const { data } = await api.get(pokemon.url)
                const newPokemon = {
                    ...data,
                    price: Math.floor(Math.random() * 1000) + 1,
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

    const getPokemonDetailObject = (id) => {
        const pokemon = pokemons.find(pokemonIndex => pokemonIndex.id === id)
        setPokemonObject(pokemon)
    }



    return (
        <PokemonListContext.Provider
            value={{
                // state
                pokemons,
                pokemonObject,
                totalPages,
                currentPage,
                perPage,
                loadingPokemons,
                //metodos
                getPokemonDetailObject,
                setCurrentPage,
                setPerPage,


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