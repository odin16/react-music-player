import { Artist } from '@shared/index';
import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './page';
import { fetchArtists } from './redux/actions';

const Home: FC = () => {
  const dispatch = useDispatch();
  const artists = useSelector<RootState, Artist[]>(({ home }) => home.artists);

  useEffect(() => {
    dispatch(fetchArtists.request());
  }, [dispatch]);

  return useMemo(() => <Page artists={artists} />, [artists]);
};

export default Home;
