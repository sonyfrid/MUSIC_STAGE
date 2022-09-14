export const addown = (payload) => ({
  type: 'ADD_OWNER',
  payload
});

// export const addplace = (payload) => ({
//   type: 'ADD_PLACE',
//   payload
// });

export const addOwnerThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/listArtist/owner');
  const data = await response.json();
  dispath(addown(data));
};

// export const addPlaceThunk = () => async (dispath) => {
//   const response = await fetch('http://localhost:3030/listArtist/place');
//   const data = await response.json();
//   dispath(addplace(data.allPlaces));
// };
