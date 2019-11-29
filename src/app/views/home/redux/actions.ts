import { Artist } from '@shared/models';
import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';

export const fetchArtists = createAsyncAction(
  types.FETCH_ARTISTS_REQUEST,
  types.FETCH_ARTISTS_SUCCESS,
  types.FETCH_ARTISTS_FAILURE
)<undefined, Artist[], Error>();
