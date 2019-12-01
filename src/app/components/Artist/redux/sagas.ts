import { Album, getAllAlbums } from '@shared/index';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAlbums } from './actions';

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

export default [takeLatest(fetchAlbums.request, getAlbumList)];
