import { getAllGenres, getRandomSong, newTab, Song } from '@shared/index';
import { path } from 'ramda';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchGenres, fetchRandomSong } from './actions';

function* getGenreList(): Generator<any, any, string[]> {
  try {
    const data = yield call(getAllGenres);
    yield put(fetchGenres.success(data));
  } catch (err) {
    yield put(fetchGenres.failure(err));
  }
}

function* getRandomSongSaga(): Generator<any, any, any> {
  try {
    const genres: string[] = yield select((state: RootState) => state.home.genres);
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const data: Song = yield call(getRandomSong, randomGenre);
    const previewUrl = path<string>(['previewUrl'], data);

    if (previewUrl) {
      yield call(newTab, previewUrl);
    } else {
      yield put(fetchRandomSong.request());
    }

    yield put(fetchRandomSong.success(data));
  } catch (err) {
    yield put(fetchRandomSong.failure(err));
  }
}

export default [
  takeLatest(fetchGenres.request, getGenreList),
  takeLatest(fetchRandomSong.request, getRandomSongSaga)
];
