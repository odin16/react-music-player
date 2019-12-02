import { Album, getAllAlbums, getAllSongs, Song } from '@shared/index';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchAlbums, fetchSongs } from './actions';

function* getAlbumList({
  payload
}: ReturnType<typeof fetchAlbums.request>): Generator<any, any, Album[]> {
  try {
    const data = yield call(getAllAlbums, payload);
    yield put(fetchAlbums.success(data));
  } catch (err) {
    yield put(fetchAlbums.failure(err));
  }
}

function* getSongList({
  payload
}: ReturnType<typeof fetchSongs.request>): Generator<any, any, Song[]> {
  try {
    const data = yield call(getAllSongs, payload);
    yield put(fetchSongs.success(data));
  } catch (err) {
    yield put(fetchSongs.failure(err));
  }
}

export default [
  takeLatest(fetchAlbums.request, getAlbumList),
  takeEvery(fetchSongs.request, getSongList)
];
