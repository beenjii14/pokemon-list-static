import axios from 'axios';
import { PokeApi } from 'configs';
import { PokemonListResponse } from 'interfaces';


const pokeApi = axios.create({
  baseURL: PokeApi.urlPokeApi,
})


export const getPokemonList = async ({ limit = 10 }) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${limit}`);
  return data.results ?? [];
}
