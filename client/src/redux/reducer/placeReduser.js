const placeReduser = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PLACES':
      return payload;
    case 'ADD_PLACES':
      return [...state, payload];
    default:
      return state;
  }
};

export default placeReduser;
