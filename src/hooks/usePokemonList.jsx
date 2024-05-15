import { useContext } from "react"
import PokemonListContext from "../context/PokemonListProvider"
const usePokemonList = () => {
    return useContext(PokemonListContext)
}

export default usePokemonList