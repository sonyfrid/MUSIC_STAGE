const allTrackReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TRACK':
      return payload;
    case 'GET_TRACK':
      return payload;
    default:
      return state.filter((elem) => elem.id !== payload);
  }
};

export default allTrackReducer;
