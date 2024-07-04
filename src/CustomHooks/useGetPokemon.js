import axios from 'axios'
import { useState } from 'react'

export const useGetPokemon = () => {
    const [pokemon, setPokemon] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [Type, setType] = useState('')

    const getPokemon = async (query) => {
        setPokemon(null)
        setIsLoading(true)
        try{
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
            setIsLoading(false)
            setIsError(false)
            const newType = data.types && data.types[0] ? data.types[0].type.name : '';
            setType(newType); 
            setPokemon(data)
        }catch (error){
            setIsLoading(false)
            setIsError(error)
        }
    }

    return {pokemon, isLoading, isError, Type, getPokemon}

}