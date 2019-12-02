import { Album, Song } from '@shared/index';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { fetchAlbums, fetchSongs, setCurrentAlbum } from './actions';

const all = createReducer<Album[]>([]).handleAction(fetchAlbums.success, (state, { payload }) => [
  ...state,
  ...payload
]);

const current = createReducer<Album | null>(null).handleAction(
  setCurrentAlbum,
  (_, { payload }) => payload
);

const songs = createReducer<Song[]>([]).handleAction(fetchSongs.success, (state, { payload }) => [
  ...state,
  ...payload
]);

export default combineReducers({
  all,
  current,
  songs
});
