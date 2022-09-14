export const getSearch = (payload) => ({
  type: 'ADD_SEARCH',
  payload
});

export const getSearchThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/search');
  const data = await response.json();
  dispath(getSearch(data.allEvents));
};
