export const getType = (payload) => ({
  type: 'GET_TYPE',
  payload
});

export const getTypeThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/types');
  const data = await response.json();
  dispath(getType(data.allTypes));
};
