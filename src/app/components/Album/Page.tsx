import { Typography } from '@material-ui/core';
import { Album, Item, msToTime, Song, Title } from '@shared/index';
import React, { FC } from 'react';
import { SongItem } from './components';
import styles from './styles.module.scss';

interface PageProps {
  album: Album;
  songs: Song[];
  suggestedSongs: Song[];
}

const Page: FC<PageProps> = props => {
  const { album, songs, suggestedSongs } = props;
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
        </div>
      </div>

      <div className={styles.songs}>
        <div className={styles.title}>
          <Title tag="h5" label="Canciones" />
        </div>
        <div className={styles.songList}>
          {songs.map((s, i) => (
            <SongItem
              key={i}
              order={i + 1}
              song={s}
              handleClick={() => !!s.previewUrl && window.open(s.previewUrl, '_blank')}
            />
          ))}
        </div>
      </div>

      <div className={styles.songs}>
        <div className={styles.title}>
          <Title tag="h5" label="Sugerencias" />
        </div>
        <div className={styles.songList}>
          {suggestedSongs.map((s, i) => (
            <SongItem
              key={i}
              order={i + 1}
              song={s}
              handleClick={() => !!s.previewUrl && window.open(s.previewUrl, '_blank')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
