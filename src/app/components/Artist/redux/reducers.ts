import { Artist } from '@shared/index';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { fetchArtists, setCurrentArtist, fetchArtist } from './actions';

const current = createReducer<Artist | null>(null).handleAction(
  [setCurrentArtist, fetchArtist.success],
  (_, { payload }) => payload
);

const all = createReducer<Artist[]>([]).handleAction(
  fetchArtists.success,
  (_, { payload }) => payload
);

export default combineReducers({
  all,
  current
});
