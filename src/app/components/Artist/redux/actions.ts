import { Artist } from '@shared/models';
import { createAction, createAsyncAction } from 'typesafe-actions';
import * as types from './types';

export const fetchArtists = createAsyncAction(
  types.FETCH_ARTISTS_REQUEST,
  types.FETCH_ARTISTS_SUCCESS,
  types.FETCH_ARTISTS_FAILURE
)<undefined, Artist[], Error>();

export const fetchArtist = createAsyncAction(
  types.FETCH_ARTIST_REQUEST,
  types.FETCH_ARTIST_SUCCESS,
  types.FETCH_ARTIST_FAILURE
)<number, Artist, Error>();

export const setCurrentArtist = createAction(types.SET_CURRENT_ARTIST)<Artist>();
