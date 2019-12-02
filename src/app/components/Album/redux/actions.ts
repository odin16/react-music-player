import { Song, Album } from '@shared/models';
import { createAsyncAction, createAction } from 'typesafe-actions';
import * as types from './types';

export const fetchAlbums = createAsyncAction(
  types.FETCH_ALBUMS_REQUEST,
  types.FETCH_ALBUMS_SUCCESS,
  types.FETCH_ALBUMS_FAILURE
)<number, Album[], Error>();

export const fetchSongs = createAsyncAction(
  types.FETCH_SONGS_REQUEST,
  types.FETCH_SONGS_SUCCESS,
  types.FETCH_SONGS_FAILURE
)<number, Song[], Error>();

export const setCurrentAlbum = createAction(types.SET_CURRENT_ALBUM)<Album>();
