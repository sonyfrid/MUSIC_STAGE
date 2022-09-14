import { combineReducers } from 'redux';
import allArtistsReducer from './allArtistsReducer';
import oneArtistsReducer from './oneArtistReducer';
import allEventsReducer from './allEventsReducer';
import userReducer from './userReducer';
import trackReducer from './trackReducer';
import typeReducer from './typeReducer';
import searchReducer from './searchReducer';
import eventsArtistsReducer from './eventsArtistReducer';
import genreReducer from './genreReducer';
import placeReduser from './placeReduser';
import allOwnerReducer from './allOwnerReducer';
import allPlaceReducer from './allPlaceReducer';
import eventStatusReducer from './eventStatusReducer';
import allTrackReducer from './allTrackReducer';
import getAllEventReducer from './getAllEventReducer';
import ALLEVENTReducer from './ALLEVENTReducer';

const rootReducer = combineReducers({
  art: allArtistsReducer,
  one: oneArtistsReducer,
  event: allEventsReducer,
  user: userReducer,
  eventart: eventsArtistsReducer,
  track: trackReducer,
  type: typeReducer,
  genre: genreReducer,
  search: searchReducer,
  place: placeReduser,
  owner: allOwnerReducer,
  places: allPlaceReducer,
  eventStatus: eventStatusReducer,
  alltrack: allTrackReducer,
  justevent: getAllEventReducer,
  allevent: ALLEVENTReducer
});

export default rootReducer;
