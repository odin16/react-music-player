import React from 'react';
import styles from './styles.module.scss';
import { Typography } from '@material-ui/core';
import { Song, msToTime } from '@shared/index';

interface SongProps {
  order: number;
  song: Song;
}

export const SongItem = (props: SongProps) => {
  const { order, song } = props;

  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <span>{order}</span>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          {song.name}
        </Typography>
      </div>
      <div className={styles.time}>
        <Typography variant="subtitle1">{msToTime(song.durationMs)}</Typography>
      </div>
    </div>
  );
};
