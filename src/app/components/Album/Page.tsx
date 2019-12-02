import { Typography } from '@material-ui/core';
import { Album, Item, Loading, msToTime, Song, Title, newTab } from '@shared/index';
import React, { FC, memo } from 'react';
import { SongItem } from './components';
import styles from './styles.module.scss';

interface PageProps {
  album: Album;
  songs: Song[];
  suggestedSongs: Song[];
}

const Page: FC<PageProps> = memo(props => {
  const { album, songs, suggestedSongs } = props;
  const msAllSongs = songs.reduce((total, song) => (total += Number(song.durationMs)), 0);
  const openPreview = (s: Song) => !!s.previewUrl && newTab(s.previewUrl);

  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <Item image={album.image} variant="rounded" style={{ cursor: 'auto' }} />

        <div className={styles.info}>
          <Title tag="h5" label={album.name} />
          <Typography className={styles.subtitle} variant="subtitle1" style={{ marginTop: '1rem' }}>
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
          {!songs.length && <Loading />}
          {songs.map((s, i) => (
            <SongItem key={i} order={i + 1} song={s} handleClick={() => openPreview(s)} />
          ))}
        </div>
      </div>

      <div className={styles.songs}>
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
