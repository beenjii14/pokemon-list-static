import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { Layout } from 'components/layouts'
import { getPokemon, getPokemonList } from 'services/PokeApi'
import { Pokemon } from 'interfaces'
import { existsInFavorites, favoritesStorage } from 'utils'

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const manipulateFavorite = () => {
    favoritesStorage({ id: pokemon.id })
    setIsFavorite(!isFavorite)
    if (!isFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 200,
        spread: 360,
        startVelocity: 30,
        origin: { x: 0.5, y: 0.3 },
      })
    }
  }

  useEffect(() => {
    setIsFavorite(existsInFavorites({ id: pokemon.id }))
  }, [pokemon.id])

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} md={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || ''}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isFavorite}
                onClick={() => manipulateFavorite()}
              >
                {isFavorite
                  ? 'Remove from favorites 💔'
                  : 'Add to favorites ❤️'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemonsIds = await getPokemonList({ limit: 151 })
  return {
    paths: pokemonsIds.map((pokemon) => ({ params: { name: pokemon.name } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as { name: string }

  return {
    props: {
      pokemon: await getPokemon(name),
    },
  }
}

export default PokemonByNamePage
