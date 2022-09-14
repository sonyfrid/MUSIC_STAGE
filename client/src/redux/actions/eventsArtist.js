export const artistevents = (payload) => ({
  type: 'ART_EVENT',
  payload
});

export const artistEventsThunk = (id) => async (dispath) => {
  const response = await fetch(`http://localhost:3030/search/${id.id}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  dispath(artistevents(data.allEventsArtist));
};
