import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { Artist } from '@shared/index';
import { fetchArtists } from './actions';

const getArtistList = createReducer<Artist[]>([]).handleAction(
  fetchArtists.success,
  (_, { payload }) => payload
);

export default combineReducers({
  artists: getArtistList
});
