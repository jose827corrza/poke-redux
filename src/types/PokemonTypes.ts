export type PokemonsResponse = {
    name: string
    url: string
};

export type GetPokemonResponse = {
    results: PokemonsResponse[]
};

export interface IPokemon {
    name: string
    url: string
}
