import { Artist, getAllArtists } from '@shared/index';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchArtists } from './actions';

function* getArtistList(): Generator<any, any, Artist[]> {
  try {
    const data = yield call(getAllArtists);
    yield put(fetchArtists.success(data));
  } catch (err) {
    yield put(fetchArtists.failure(err));
  }
}

export default [takeLatest(fetchArtists.request, getArtistList)];
