import { Grid } from '@nextui-org/react'
import { FavoriteCard } from './FavoriteCard'

interface FavoritesProps {
  favorites: number[]
}

const FavoritesPokemons = ({ favorites }: FavoritesProps) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favorites.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <FavoriteCard id={id} />
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default FavoritesPokemons
