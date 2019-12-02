import { Album, Loading } from '@shared/index';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbums, selectAlbumsCurrentArtist, setCurrentAlbum } from '../Album';
import Page from './Page';
import { fetchArtist, selectCurrentArtist } from './redux';

export const Artist: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const artist = useSelector(selectCurrentArtist);
  const albums = useSelector(selectAlbumsCurrentArtist);

  useEffect(() => {
    if (id && !artist) {
      dispatch(fetchArtist.request(id));
    }
  }, [artist, id, dispatch]);

  useEffect(() => {
    console.log('useEffect: ', id && !albums.length, id, albums.length);
    if (id && !albums.length) {
      dispatch(fetchAlbums.request(id));
    }
  }, [albums, id, dispatch]);

  const setSelectedAlbum = (album: Album) => dispatch(setCurrentAlbum(album));

  return artist ? (
    <Page artist={artist} albums={albums} setSelectedAlbum={setSelectedAlbum} />
  ) : (
    <Loading fixed mainStyles={{ background: 'rgba(40, 44, 52, 0.2)' }} />
  );
};
