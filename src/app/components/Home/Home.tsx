import { Artist } from '@shared/index';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtists, selectArtists, setCurrentArtist } from '../Artist';
import Page from './Page';
import { fetchGenres, fetchRandomSong, selectLoadingRandomSong } from './redux';
import { push } from 'connected-react-router';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const artists = useSelector(selectArtists);
  const loadingRandomSong = useSelector(selectLoadingRandomSong);

  useEffect(() => {
    dispatch(fetchArtists.request());
    dispatch(fetchGenres.request());
  }, [dispatch]);

  const setSelectedArtist = (artist: Artist) => {
    dispatch(setCurrentArtist(artist));
    dispatch(push(artist.location));
  };

  const playRandomSong = () => dispatch(fetchRandomSong.request());

  return (
    <Page
      artists={artists}
      setSelectedArtist={setSelectedArtist}
      loadingRandomSong={loadingRandomSong}
      playRandomSong={playRandomSong}
    />
  );
};
