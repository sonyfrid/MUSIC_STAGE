const genreReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_GENRE':
      return payload;
    default:
      return state;
  }
};

export default genreReducer;
