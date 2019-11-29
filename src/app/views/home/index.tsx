import { Artist } from '@shared/index';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './page';
import { fetchArtists } from './redux/actions';

const Home: FC = () => {
  const dispatch = useDispatch();
  const artists = useSelector<RootState, Artist[]>(({ home }) => home.artists);

  useEffect(() => {
    console.log('Consultando artistas...');
    dispatch(fetchArtists.request());
  }, [dispatch]);

  useEffect(() => {
    console.log('Artistas: ', artists);
  }, [artists]);

  return <Page />;
};

export default Home;
