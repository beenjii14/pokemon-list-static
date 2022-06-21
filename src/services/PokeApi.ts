import axios from 'axios';
import { PokeApi } from 'configs';
import { Pokemon, PokemonListResponse } from 'interfaces';


const pokeApi = axios.create({
  baseURL: PokeApi.urlPokeApi,
})


export const getPokemonList = async ({ limit = 10 }) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${limit}`);
  return data.results ?? [];
}

export const getPokemon = async (id: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return data;
}
