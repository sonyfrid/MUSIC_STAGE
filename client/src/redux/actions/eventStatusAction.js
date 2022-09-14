import { addEventThunk } from './allEventsAction';

/* eslint-disable quotes */
export const addEventStatus = (payload) => ({
  type: 'ADD_EVENT_STATUS',
  payload
});

export const getEventStatus = (payload) => ({
  type: 'GET_EVENT_STATUS',
  payload
});

export const patchEventStatus = (payload) => ({
  type: 'PATCH_EVENT_STATUS',
  payload
});

export const addEventStatusThunk = ({ event_id, artist_id, message }) => async (dispath) => {
  const response = await fetch('http://localhost:3030/eventStatus', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ event_id, artist_id, message }),
  });
  const data = await response.json();
  dispath(addEventStatus(data));
};

// export const getEventStatusThunk = (id) => async (dispath) => {
//   const response = await fetch(`http://localhost:3030/eventStatus/${id}`);
//   const data = await response.json();
//   dispath(getEventStatus(data));
// };

export const getEventStatusThunk = () => async (dispath) => {
  const response = await fetch(`http://localhost:3030/eventStatus/`);
  const data = await response.json();
  dispath(getEventStatus(data));
};

export const patchEventStatusThunk = ({ event_id, artist_id, status }) => async (dispath) => {
  const response = await fetch('http://localhost:3030/eventStatus', {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ event_id, artist_id, status }),
  });
  const data = await response.json();
  dispath(patchEventStatus(data));
  dispath(addEventThunk());
};
