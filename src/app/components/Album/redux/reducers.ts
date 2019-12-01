import { Song } from '@shared/index';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { fetchSongs } from './actions';

const songs = createReducer<Song[]>([]).handleAction(fetchSongs.success, (state, { payload }) => [
  ...state,
  ...payload
]);

export default combineReducers({
  songs
});