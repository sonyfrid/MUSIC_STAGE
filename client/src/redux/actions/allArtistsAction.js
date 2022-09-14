export const addart = (payload) => ({
  type: 'ADD_ART',
  payload
});

export const addArtThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/listArtist');
  const data = await response.json();
  dispath(addart(data.allArtists));
};
