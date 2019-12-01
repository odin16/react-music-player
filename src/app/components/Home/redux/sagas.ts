import { Artist, getAllArtists, getAllGenres, Song, getRandomSong } from '@shared/index';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { fetchArtists, fetchGenres, fetchRandomSong } from './actions';

function* getGenreList(): Generator<any, any, string[]> {
  try {
    const data = yield call(getAllGenres);
    yield put(fetchGenres.success(data));
  } catch (err) {
    yield put(fetchGenres.failure(err));
  }
}

function* getArtistList(): Generator<any, any, Artist[]> {
  try {
    const data = yield call(getAllArtists);
    yield put(fetchArtists.success(data));
  } catch (err) {
    yield put(fetchArtists.failure(err));
  }
}

function* getRandomSongSaga(): Generator<any, any, any> {
  try {
    const genres: string[] = yield select((state: RootState) => state.home.genres);
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const data: Song = yield call(getRandomSong, randomGenre);
    yield put(fetchRandomSong.success(data));
  } catch (err) {
    yield put(fetchRandomSong.failure(err));
  }
}

export default [
  takeLatest(fetchGenres.request, getGenreList),
  takeLatest(fetchArtists.request, getArtistList),
  takeLatest(fetchRandomSong.request, getRandomSongSaga)
];
