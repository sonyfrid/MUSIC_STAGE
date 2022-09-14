const allArtistsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_ART':
      return payload;
    default:
      return state;
  }
};

export default allArtistsReducer;
