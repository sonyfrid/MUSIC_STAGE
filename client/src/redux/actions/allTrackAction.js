export const addTrack = (payload) => ({
  type: 'ADD_TRACK',
  payload
});

export const getTrack = (payload) => ({
  type: 'GET_TRACK',
  payload
});

export const allTrackThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/upload/alltracks');
  const data = await response.json();
  dispath(addTrack(data.allTracks));
};

export const getTrackThunk = (user, formData) => async (dispath) => {
  console.log(user, formData);
  const response = await fetch('http://localhost:3030/upload/add', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
    const data = await response.json();
    dispath(getTrack(data));
  }
};
