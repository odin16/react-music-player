import { Button, Typography } from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { Artist, Item, msToTime, Song, Title } from '@shared/index';
import React, { FC } from 'react';
import { SongItem } from './components';
import styles from './styles.module.scss';

interface PageProps {
  album: Artist;
  songs: Song[];
}

const Page: FC<PageProps> = props => {
  const { album, songs } = props;
  const msAllSongs = songs.reduce((total, song) => (total += Number(song.durationMs)), 0);

  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <Item image={album.image} variant="rounded" style={{ cursor: 'default' }} />

        <div className={styles.info}>
          <Title tag="h5" label={album.name} />
          <Typography className={styles.subtitle} variant="subtitle1">
            {`Álbum • ${album.name}`}
          </Typography>
          <Typography className={styles.subtitle} variant="subtitle1">
            {`${songs.length} canciones • ${msToTime(msAllSongs)}`}
          </Typography>
          <div className={styles.actions}>
            <Button variant="contained" startIcon={<PlayArrow />}>
              Reproducir
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.songs}>
        <div className={styles.songList}>
          {songs.map((s, i) => (
            <SongItem key={i} order={i + 1} song={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
