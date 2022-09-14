const trackReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    // case 'GET_TRACK':
    //   return payload;
    case 'DEL_TRACK':
      return payload;
    default:
      return state;
  }
};

export default trackReducer;
