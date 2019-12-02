import { Album, Loading } from '@shared/index';
import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbums, selectAlbumsCurrentArtist, setCurrentAlbum } from '../Album';
import Page from './Page';
import { fetchArtist, selectCurrentArtist } from './redux';
import { push } from 'connected-react-router';

export const Artist: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const artist = useSelector(selectCurrentArtist);
  const albums = useSelector(selectAlbumsCurrentArtist);
  const albumsWereConsulted = useRef(false);

  useEffect(() => {
    if (id && !artist) {
      dispatch(fetchArtist.request(id));
    }
  }, [artist, id, dispatch]);

  useEffect(() => {
    if (!albumsWereConsulted.current && id && !albums.length) {
      dispatch(fetchAlbums.request(id));
      albumsWereConsulted.current = true;
    }
  }, [albums, id, dispatch]);

  const setSelectedAlbum = (album: Album) => {
    dispatch(setCurrentAlbum(album));
    dispatch(push(album.location));
  };

  return artist ? (
    <Page artist={artist} albums={albums} setSelectedAlbum={setSelectedAlbum} />
  ) : (
    <Loading fixed mainStyles={{ background: 'rgba(40, 44, 52, 0.2)' }} />
  );
};
