import { useEffect, useState } from 'react'
import { Layout } from 'components/layouts'
import { NoFavorites } from 'components/ui'
import { getFavoritesIds } from 'utils'
import FavoritesPokemons from 'components/pokemon/FavoritesPokemons'

const Favorites = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(getFavoritesIds())
  }, [])

  return (
    <Layout title="Favorites">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favorites={favorites} />
      )}
    </Layout>
  )
}

export default Favorites
