import { Artist, getAllArtists, getArtistById } from '@shared/index';
import { call, put, takeLatest, fork, take } from 'redux-saga/effects';
import { fetchArtists, fetchArtist } from './actions';

function* getArtistList(): Generator<any, any, Artist[]> {
  try {
    const data = yield call(getAllArtists);
    yield put(fetchArtists.success(data));
  } catch (err) {
    yield put(fetchArtists.failure(err));
  }
}

function* getArtist(id: number): Generator<any, any, Artist> {
  try {
    const data = yield call(getArtistById, id);
    yield put(fetchArtist.success(data));
  } catch (err) {
    yield put(fetchArtist.failure(err));
  }
}

function* watchGetArtist(): Generator<any, any, number> {
  while (true) {
    const idArtist = yield take(fetchArtist.request);
    yield call(getArtist, idArtist);
  }
}

export default [takeLatest(fetchArtists.request, getArtistList), fork(watchGetArtist)];
