import { Album } from '@shared/index';
import React, { FC, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Page from './Page';
import { fetchAlbums } from './redux/actions';

const Artists: FC = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const filterAlbumsByArtist = (a: Album) => a.idArtist === id;

  const dispatch = useDispatch();
  const allAlbums = useSelector<RootState, Album[]>(({ artist }) => artist.albums);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const existAlbums = allAlbums.find(filterAlbumsByArtist);
    if (id && !existAlbums) {
      dispatch(fetchAlbums.request(id));
    }
  }, [allAlbums, id, dispatch]);

  useEffect(() => {
    if (id && allAlbums.length) {
      setAlbums(allAlbums.filter(filterAlbumsByArtist));
    }
  }, [id, allAlbums]);

  return useMemo(() => <Page artist={state} albums={albums} />, [state, albums]);
};

export default Artists;
