import React, { FC } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { IPokemon } from '../types/PokemonTypes';

interface Props {
    pokemons: IPokemon[]
}
type Pokemon = {
    name: String
    pokemons: any
} & typeof defaultProps;
// {name, pokemons}: Pokemon props
export const PokemonList:FC<Props> = ({ pokemons }) => {
  return (
    <div className='grid grid-cols-5 p-12 gap-4 '>
        {
            pokemons.map((pokemon) => {
                return <PokemonCard 
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    />
                
            })
        }
    </div>
  )
}

const defaultProps = {
    pokemons: Array(10).fill(''), // ['','']
}
