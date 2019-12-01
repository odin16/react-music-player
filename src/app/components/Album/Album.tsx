import { Album as AlbumModel, Song } from '@shared/index';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Page from './Page';
import { fetchSongs } from './redux/actions';

export const Album: FC = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const suggestedAlbumIds = (state.suggestedAlbums as AlbumModel[]).map(a => a.id);
  const filterSongByAlbum = (s: Song) => s.idAlbum === id;
  const filterSongByAlbums = (s: Song, ids: number[]) => ids.includes(s.idAlbum);

  const dispatch = useDispatch();
  const allSongs = useSelector<RootState, Song[]>(({ album }) => album.songs);
  const [songs, setSongs] = useState<Song[]>([]);
  const [suggestedSongs, setSuggestedSongs] = useState<Song[]>([]);
  const songsWereConsulted = useRef(false);

  useEffect(() => {
    const existSongs = allSongs.find(filterSongByAlbum);

    if (id && !existSongs && !songsWereConsulted.current) {
      const allAlbumIds = [...suggestedAlbumIds, id];

      allAlbumIds.forEach(id => dispatch(fetchSongs.request(id)));
      songsWereConsulted.current = true;
    }
  }, [allSongs, id, dispatch]);

  useEffect(() => {
    if (id && allSongs.length) {
      const albumSongs = allSongs.filter(filterSongByAlbum);
      const suggestedSongsFiltered = allSongs.filter(s => filterSongByAlbums(s, suggestedAlbumIds));
      const shuffled = suggestedSongsFiltered.sort(() => 0.5 - Math.random());
      const random = shuffled.slice(0, 5);

      setSuggestedSongs(random);
      setSongs(albumSongs);
    }
  }, [id, allSongs]);

  return useMemo(
    () => <Page album={state.albumSelected} songs={songs} suggestedSongs={suggestedSongs} />,
    [state, songs, suggestedSongs]
  );
};
