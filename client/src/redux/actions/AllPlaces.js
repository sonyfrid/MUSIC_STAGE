export const getPlace = (payload) => ({
  type: 'GET_PLACES',
  payload
});
export const addPlace = (payload) => ({
  type: 'ADD_PLACES',
  payload
});

export const getAllPlaceThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/allPlaces');
  const data = await response.json();
  dispath(getPlace(data.allPlaces));
};

export const addPlaceThunk = (payload) => async (dispath) => {
  console.log(payload);
  const response = await fetch('http://localhost:3030/allPlaces', {
    method: 'POST',
    body: payload
  });
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    dispath(addPlace(data.place));
  }
};
