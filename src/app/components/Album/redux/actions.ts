import { Song } from '@shared/models';
import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';

export const fetchSongs = createAsyncAction(
  types.FETCH_SONGS_REQUEST,
  types.FETCH_SONGS_SUCCESS,
  types.FETCH_SONGS_FAILURE
)<number, Song[], Error>();
