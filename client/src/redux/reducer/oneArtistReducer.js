const oneArtistsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_MODAL':
      return payload;
    default:
      return state;
  }
};

export default oneArtistsReducer;
