import { Album } from '@shared/index';
import React, { FC, useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Page from './Page';
import { fetchAlbums } from './redux/actions';
import { push } from 'connected-react-router';

export const Artist: FC = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const filterAlbumByArtist = (a: Album) => a.idArtist === id;

  const dispatch = useDispatch();
  const allAlbums = useSelector<RootState, Album[]>(({ artist }) => artist.albums);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const existAlbums = allAlbums.find(filterAlbumByArtist);
    if (id && !existAlbums) {
      dispatch(fetchAlbums.request(id));
    }
  }, [allAlbums, id, dispatch]);

  useEffect(() => {
    if (id && allAlbums.length) {
      const artistAlbums = allAlbums.filter(filterAlbumByArtist);
      setAlbums(artistAlbums);
    }
  }, [id, allAlbums]);

  const goTo = useCallback((location: string, context: any) => dispatch(push(location, context)), [
    dispatch
  ]);

  return useMemo(() => <Page artist={state} albums={albums} goTo={goTo} />, [state, albums]);
};
