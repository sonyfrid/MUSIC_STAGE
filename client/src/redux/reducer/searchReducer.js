const searchReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_SEARCH':
      return payload;
    // case 'ADD_FILTER':
    //   return state.filter(el => el.state);
    default:
      return state;
  }
};

export default searchReducer;
