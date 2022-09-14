export const addmodal = (payload) => ({
  type: 'ADD_MODAL',
  payload
});

export const addModalThunk = (id) => async (dispath) => {
  const response = await fetch(`http://localhost:3030/listArtist/${id.id}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  dispath(addmodal(data.oneArtists));
};
