/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable quotes */
const eventStatusReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_EVENT_STATUS':
      return payload;
    case 'ADD_EVENT_STATUS':
      return [...state, payload];
    // case 'PATCH_EVENT_STATUS':
    //   const index = state.findIndex((el) => el.event_id === payload.event_id && el.user_id === payload.user_id);
    //   return state[index] = payload ;
    case 'PATCH_EVENT_STATUS':
      return payload;
    default:
      return state;
  }
};

export default eventStatusReducer;
