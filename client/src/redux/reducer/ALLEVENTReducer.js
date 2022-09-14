const ALLEVENTReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL_EVENT':
      return payload;
    case 'ADD_EVENT':
      return payload;
    default:
      return state;
  }
};

export default ALLEVENTReducer;
