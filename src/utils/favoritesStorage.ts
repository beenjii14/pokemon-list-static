interface FavoritesProps {
  id: number;
}

const getFavorites = () => (localStorage.getItem('favorites') || '[]');

export const favoritesStorage = ({ id }: FavoritesProps) => {
  let favorites = JSON.parse(getFavorites());
  if (favorites.includes(id)) {
    favorites = favorites.filter((favorite: number) => favorite !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export const existsInFavorites = ({ id }: FavoritesProps): boolean => {
  const favorites = JSON.parse(getFavorites());
  return favorites.includes(id);
}
