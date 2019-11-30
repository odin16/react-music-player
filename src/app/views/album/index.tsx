import { Song } from '@shared/index';
import React, { FC, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Page from './Page';
import { fetchSongs } from './redux/actions';

const Album: FC = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const filterSongsByAlbum = (s: Song) => s.idAlbum === id;

  const dispatch = useDispatch();
  const allSongs = useSelector<RootState, Song[]>(({ album }) => album.songs);
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const existSongs = allSongs.find(filterSongsByAlbum);
    if (id && !existSongs) {
      dispatch(fetchSongs.request(id));
    }
  }, [allSongs, id, dispatch]);

  useEffect(() => {
    if (id && allSongs.length) {
      console.log('allSongs: ', allSongs);
      setSongs(allSongs.filter(filterSongsByAlbum));
    }
  }, [id, allSongs]);

  // return useMemo(() => <Page artist={state} albums={albums} />, [state, albums]);
  return <Page album={state} songs={songs} />;
};

export default Album;
