import type { GetStaticProps, NextPage } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { Layout } from 'components/layouts'
import { getPokemonList } from 'services/PokeApi'
import { PokeApi } from 'configs'
import { SmallPokemon } from 'interfaces'

interface Props {
  pokemonsList: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemonsList = [] }) => {
  return (
    <Layout title="Home">
      <Grid.Container gap={2} justify="flex-start">
        {pokemonsList.map(({ id, name, image }) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card title={name} hoverable clickable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={image} width="100%" height={140} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{name}</Text>
                  <Text>#{id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  )
}

// nextGetStaticProps is a function that gets called when the page is loaded.
export const getStaticProps: GetStaticProps = async () => {
  const response = await getPokemonList({ limit: 20 })
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
