import { getAllSongs, Song } from '@shared/index';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSongs } from './actions';

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

export default [takeLatest(fetchSongs.request, getSongList)];
