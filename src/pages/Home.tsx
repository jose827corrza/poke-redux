import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { getPokemons } from '../api';
import { AppPokemons } from '../App';
import { PokemonList } from '../containers/PokemonList'

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        async function fetchPokemons(){
            const data = await getPokemons();
            setPokemons(data);
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