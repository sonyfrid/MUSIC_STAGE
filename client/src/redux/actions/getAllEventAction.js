export const getallevents = (payload) => ({
  type: 'GET_ALL_EVENT',
  payload,
});

export const getalleventsThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/listArtist/getallevents');
  const data = await response.json();
  dispath(getallevents(data.getAllEvents));
};
