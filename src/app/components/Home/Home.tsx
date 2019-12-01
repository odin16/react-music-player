import { Artist, Song } from '@shared/index';
import { push } from 'connected-react-router';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';
import { fetchArtists, fetchGenres, fetchRandomSong } from './redux/actions';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const artists = useSelector<RootState, Artist[]>(({ home }) => home.artists);
  const randomSong = useSelector<RootState, Song | null>(({ home }) => home.randomSong);

  useEffect(() => {
    dispatch(fetchArtists.request());
    dispatch(fetchGenres.request());
  }, [dispatch]);

  useEffect(() => {
    if (randomSong) {
      if (randomSong.previewUrl) {
        window.open(randomSong.previewUrl, '_blank');
      } else {
        dispatch(fetchRandomSong.request());
      }
    }
  }, [randomSong]);

  const goTo = useCallback((location: string, context: any) => dispatch(push(location, context)), [
    dispatch
  ]);

  const getRandomSong = useCallback(() => dispatch(fetchRandomSong.request()), [dispatch]);

  return useMemo(() => <Page artists={artists} goTo={goTo} getRandomSong={getRandomSong} />, [
    artists
  ]);
};
