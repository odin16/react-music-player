import { Typography } from '@material-ui/core';
import { Album, Item, Loading, msToTime, Song, Title, newTab } from '@shared/index';
import React, { FC, memo } from 'react';
import { SongItem } from './components';
import styles from './styles.module.scss';
import { song } from '@app/__mocks__/data';

export interface PageProps {
  album: Album;
  songs: Song[];
  suggestedSongs: Song[];
}

export const msAllSongs = (songs: Song[]) =>
  songs.reduce((total, song) => (total += Number(song.durationMs)), 0);

const Page: FC<PageProps> = memo(props => {
  const { album, songs, suggestedSongs } = props;
  const openPreview = (s: Song) => !!s.previewUrl && newTab(s.previewUrl);

  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <Item image={album.image} variant="rounded" style={{ cursor: 'auto' }} className="album" />

        <div className={`${styles.info}`} test-id="info">
          <Title tag="h5" label={album.name} />
          <Typography className={styles.subtitle} variant="subtitle1" style={{ marginTop: '1rem' }}>
            <span test-id="album-name">{`Álbum • ${album.name}`}</span>
          </Typography>
          <Typography className={styles.subtitle} variant="subtitle1">
            <span test-id="time-songs">{`${songs.length} canciones • ${msToTime(
              msAllSongs(songs)
            )}`}</span>
          </Typography>
        </div>
      </div>

      <div className={`${styles.songs} songs`} test-id="album-songs">
        <div className={styles.title}>
          <Title tag="h5" label="Canciones" />
        </div>
        <div className={styles.songList}>
          {!songs.length && <Loading />}
          {songs.map((s, i) => (
            <SongItem key={i} order={i + 1} song={s} handleClick={() => openPreview(s)} />
          ))}
        </div>
      </div>

      <div className={`${styles.songs} songs`} test-id="suggested-songs">
        <div className={styles.title}>
          <Title tag="h5" label="Sugerencias" />
        </div>
        <div className={styles.songList}>
          {!suggestedSongs.length && <Loading />}
          {suggestedSongs.map((s, i) => (
            <SongItem key={i} order={i + 1} song={s} handleClick={() => openPreview(s)} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Page;
