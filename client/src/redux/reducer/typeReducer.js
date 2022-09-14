const typeReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TYPE':
      return payload;
    default:
      return state;
  }
};

export default typeReducer;
