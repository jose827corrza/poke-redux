import { Types } from '../actions/types';
import { GetPokemonResponse } from '../types/PokemonTypes'

type TypeState = {
    pokemons: GetPokemonResponse[]
}

const initialState = {
    pokemons: []
};

export const pokemonsReducer = (state: TypeState = initialState, action: any) => {
    switch(action.type){
        case Types.SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            }
        default:
            return state;
    }
}