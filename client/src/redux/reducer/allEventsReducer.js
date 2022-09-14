const allEventsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_EVENT':
      return payload;
    // case 'ADD_EVENT':
    //   return [...state, payload];
    default:
      return state;
  }
};

export default allEventsReducer;
