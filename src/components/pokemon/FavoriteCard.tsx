import { Card } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface FavoritesProps {
  id: number
}

export const FavoriteCard = ({ id }: FavoritesProps) => {
  const router = useRouter()

  const navigateToPokemon = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Card
      hoverable
      clickable
      css={{ padding: 10 }}
      onClick={() => navigateToPokemon()}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={'100%'}
        height={140}
      />
    </Card>
  )
}
