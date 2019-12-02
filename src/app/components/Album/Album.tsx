import { Loading } from '@shared/index';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Page from './Page';
import {
  selectCurrentAlbum,
  selectSongsCurrentAlbum,
  selectSongsSuggestedAlbums,
  selectSuggestedAlbumsIds
} from './redux';
import { fetchSongs } from './redux/actions';

export const Album: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const album = useSelector(selectCurrentAlbum);
  const songs = useSelector(selectSongsCurrentAlbum);
  const suggestedAlbumsIds = useSelector(selectSuggestedAlbumsIds);
  const suggestedSongs = useSelector(selectSongsSuggestedAlbums);

  // const songsWereConsulted = useRef(false);

  useEffect(() => {
    if (!songs.length) {
      dispatch(fetchSongs.request(id));
    }
  }, [songs, id, dispatch]);

  useEffect(() => {
    if (!suggestedSongs.length) {
      suggestedAlbumsIds.forEach(id => dispatch(fetchSongs.request(id)));
    }
  }, [suggestedSongs, suggestedAlbumsIds, dispatch]);

  return album ? (
    <Page album={album} songs={songs} suggestedSongs={suggestedSongs} />
  ) : (
    <Loading fixed mainStyles={{ background: 'rgba(40, 44, 52, 0.2)' }} />
  );
};
