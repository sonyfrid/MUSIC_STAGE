import {
  call, put, takeEvery, takeLatest, debounce,
} from 'redux-saga/effects';

async function getAlbum(album) {
  const response = await fetch(`http://localhost:3030/albums?album=${album}`);
  const data = await response.json();
  return data;
}

// worker
function* fetchAlbum(action) {
  try {
    const album = yield call(getAlbum, action.payload);
    yield put({ type: 'ADD_ALBUM', payload: album }); // put = dispatch
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// watcher
function* findAlbumSaga() {
  yield debounce(1000, 'FIND_ALBUM', fetchAlbum);
}

export default findAlbumSaga;
