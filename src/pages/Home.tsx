import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';

import { setPokemons } from '../actions';
import { getPokemons } from '../api';
import { PokemonList } from '../containers/PokemonList'
import { PokemonsResponse } from '../types/PokemonTypes';

export type AppPokemons = {
    pokemons: PokemonsResponse[],
    setPokemons: any
  }

export const Home = () => {
    // const [pokemons, setPokemons] = useState([]);
    const pokemons = useSelector((state: AppPokemons) => state.pokemons);
    const dispatch = useDispatch();
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        async function fetchPokemons(){
            const data = await getPokemons();
            dispatch(setPokemons(data));
        }
        fetchPokemons();
    }, []);

    const onSearch = (newValue: string) => {
        setSearchWord(newValue);
        
    }
  return (
    <>
        <div className='flex pt-20 items-center'>
            {/* <h1 className="text-3xl font-bold underline text-red-600 dark:text-white">
            Hello world!
            </h1> */}
            <input 
                className='ml-5 rounded-md h-10 w-1/8 p-2 mr-2 border focus:outline-node focus:shadow-outline'
                placeholder='Search your pokemon . . .'
                value={searchWord}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {onSearch(event.target.value)}}
                />
            <BsSearch size={24} />
        </div>
        <PokemonList pokemons={pokemons} />
    </>
  )
}
// Array(10).fill('')