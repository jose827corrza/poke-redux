import axios from 'axios';

import { GetPokemonResponse, } from '../types/PokemonTypes'

export const getPokemons = async () => {
    try {
        const { data } = await axios.get<GetPokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=151')        
        return data.results;
    } catch (error) {
        console.log(error);
        
    }
}