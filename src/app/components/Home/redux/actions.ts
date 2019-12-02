import { Song } from '@shared/index';
import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';

export const fetchGenres = createAsyncAction(
  types.FETCH_GENRES_REQUEST,
  types.FETCH_GENRES_SUCCESS,
  types.FETCH_GENRES_FAILURE
)<undefined, string[], Error>();

export const fetchRandomSong = createAsyncAction(
  types.FETCH_RANDOM_REQUEST,
  types.FETCH_RANDOM_SUCCESS,
  types.FETCH_RANDOM_FAILURE
)<undefined, Song, Error>();