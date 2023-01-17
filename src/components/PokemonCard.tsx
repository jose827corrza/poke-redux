import React, { FC } from 'react'
import { IPokemon } from '../types/PokemonTypes'

export const PokemonCard:FC<IPokemon> = ({ name, url }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-green-100'>
        <img className='w-full' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png" alt="pikachu" />
        <div className='font-bold text-lx mb-2 ml-4'>
            {name.toLocaleUpperCase()}
        </div>
        <div className='px-6 pt-4 pb-2'>
            <span 
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 font-semibold mr-2 mb-2'
                >Electric
              </span>
            <span 
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 font-semibold mr-2 mb-2'
                >Beautiful
              </span>
        </div>
    </div>
  )
}
