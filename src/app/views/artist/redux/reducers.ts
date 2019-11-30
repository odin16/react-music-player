import { Album } from '@shared/index';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { fetchAlbums } from './actions';

const getAlbumList = createReducer<Album[]>([]).handleAction(
  fetchAlbums.success,
  (state, { payload }) => [...state, ...payload]
);

export default combineReducers({
  albums: getAlbumList
});
