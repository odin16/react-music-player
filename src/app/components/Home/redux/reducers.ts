import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { fetchGenres, fetchRandomSong } from './actions';

const genres = createReducer<string[]>([]).handleAction(
  fetchGenres.success,
  (_, { payload }) => payload
);

const loadingRandomSong = createReducer<boolean>(false)
  .handleAction(fetchRandomSong.request, () => true)
  .handleAction([fetchRandomSong.success, fetchRandomSong.failure], () => false);

export default combineReducers({
  genres,
  loadingRandomSong
});
