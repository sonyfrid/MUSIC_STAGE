import { all } from 'redux-saga/effects';
import findArtistSaga from './findArtistSaga';

export default function* rootSaga() {
  yield all([
    findArtistSaga(),
  ]);
}
