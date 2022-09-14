export const allEvent = (payload) => ({
  type: 'ALL_EVENT',
  payload,
});
export const addEvent = (payload) => ({
  type: 'ADD_EVENT',
  payload,
});

export const addOneEventThunk = (payload) => async (dispath) => {
  console.log(payload);
  const response = await fetch('http://localhost:3030/addEvent', {
    method: 'POST',
    body: payload
  });
  if (response.ok) {
    const data = await response.json();
    // console.log(data.allEvents);
    dispath(addEvent(data.allEvents));
  }
};

export const allEventThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/listArtist/event');
  const data = await response.json();
  // console.log('444', data);
  dispath(allEvent(data.allEvents));
};
