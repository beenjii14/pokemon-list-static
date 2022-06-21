import type { GetStaticProps, NextPage } from 'next'
import { Grid } from '@nextui-org/react'
import { Layout } from 'components/layouts'
import { PokemonCard } from 'components/pokemon'
import { getPokemonList } from 'services/PokeApi'
import { SmallPokemon } from 'interfaces'
import { PokeApi } from 'configs'

interface Props {
  pokemonsList: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemonsList = [] }) => {
  return (
    <Layout title="Home">
      <Grid.Container gap={2} justify="flex-start">
        {pokemonsList.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

// nextGetStaticProps is a function that gets called when the page is loaded.
export const getStaticProps: GetStaticProps = async () => {
  const response = await getPokemonList({ limit: 151 })
  const pokemonsList: SmallPokemon[] = response.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    image: PokeApi.getImagePokemon.concat(`${index + 1}.svg`),
  }))
  return {
    props: { pokemonsList },
  }
}

export default HomePage
