export const addplace = (payload) => ({
  type: 'ADD_PLACE',
  payload
});

export const delplace = (payload) => ({
  type: 'DEL_PLACE',
  payload
});

export const addPlaceThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/listArtist/place');
  const data = await response.json();
  dispath(addplace(data.allPlaces));
};

export const delPlaceThunk = (id_place) => async (dispath) => {
  console.log('--1-1-1-', id_place);
  const response = await fetch(`http://localhost:3030/listArtist/place/${id_place}`, {
    method: 'delete'
  });
  const data = await response.json();
  dispath(delplace(data));
};
