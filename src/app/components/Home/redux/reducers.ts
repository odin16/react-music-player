import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { Artist, Song } from '@shared/index';
import { fetchArtists, fetchGenres, fetchRandomSong } from './actions';

const genres = createReducer<string[]>([]).handleAction(
  fetchGenres.success,
  (_, { payload }) => payload
);

const artists = createReducer<Artist[]>([]).handleAction(
  fetchArtists.success,
  (_, { payload }) => payload
);

const randomSong = createReducer<Song | null>(null).handleAction(
  fetchRandomSong.success,
  (_, { payload }) => payload
);

export default combineReducers({
  genres,
  artists,
  randomSong
});
