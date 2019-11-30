import { Album } from '@shared/models';
import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';

export const fetchAlbums = createAsyncAction(
  types.FETCH_ALBUMS_REQUEST,
  types.FETCH_ALBUMS_SUCCESS,
  types.FETCH_ALBUMS_FAILURE
)<number, Album[], Error>();
