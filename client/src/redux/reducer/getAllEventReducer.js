const getAllEventReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ALL_EVENT':
      return payload;
    default:
      return state;
  }
};

export default getAllEventReducer;
