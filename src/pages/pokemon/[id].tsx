import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/layouts'
import { getPokemon } from 'services/PokeApi'
import { Pokemon } from 'interfaces'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
      <h1>{pokemon.name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const pokemonsIds = [...Array(151)].map((_, index) => `${index + 1}`)
  return {
    paths: pokemonsIds.map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string }
  const pokemon = await getPokemon(id)

  return {
    props: {
      pokemon,
    },
  }
}

export default PokemonPage
