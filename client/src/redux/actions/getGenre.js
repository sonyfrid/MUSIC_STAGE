export const getGenre = (payload) => ({
  type: 'GET_GENRE',
  payload
});

export const getGenreThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/genres');
  const data = await response.json();
  dispath(getGenre(data.allGenres));
};
