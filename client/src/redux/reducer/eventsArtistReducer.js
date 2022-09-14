const eventsArtistsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ART_EVENT':
      return payload;
    default:
      return state;
  }
};

export default eventsArtistsReducer;
