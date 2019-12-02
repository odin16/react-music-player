import { createSelector } from 'reselect';
import { selectCurrentArtist } from '@app/components/Artist';

export const selectAlbums = (state: RootState) => state.album.all;
export const selectCurrentAlbum = (state: RootState) => state.album.current;
export const selectSongs = (state: RootState) => state.album.songs;

export const selectAlbumsCurrentArtist = createSelector(
  selectCurrentArtist,
  selectAlbums,
  (artist, albums) => (artist ? albums.filter(a => a.idArtist === artist.id) : [])
);

export const selectSuggestedAlbumsIds = createSelector(selectAlbumsCurrentArtist, albums =>
  albums
    .sort(() => 0.5 - Math.random())
    .slice(0, 2)
    .map(a => a.id)
);

export const selectSongsCurrentAlbum = createSelector(
  selectCurrentAlbum,
  selectSongs,
  (album, songs) => (album ? songs.filter(s => s.idAlbum === album.id) : [])
);

export const selectSongsSuggestedAlbums = createSelector(
  selectSuggestedAlbumsIds,
  selectSongs,
  (albumsIds, songs) =>
    songs
      .filter(s => albumsIds.includes(s.idAlbum))
      .sort(() => 0.5 - Math.random())
      .slice(0, 5)
);
