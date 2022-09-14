const allOwnerReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_OWNER':
      return payload;
    case 'ADD_PLACE':
      return payload;
    default:
      return state;
  }
};

export default allOwnerReducer;
