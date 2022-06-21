import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from 'interfaces'

export const PokemonCard = ({ id, name, image }: SmallPokemon) => {
  const router = useRouter()
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card
        title={name}
        hoverable
        clickable
        onClick={() => router.push(`/pokemon/${id}`)}
      >
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
  )
}
