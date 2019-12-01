import React from 'react';
import styles from './styles.module.scss';
import { Typography } from '@material-ui/core';
import { Song, msToTime } from '@shared/index';

interface SongProps {
  order: number;
  song: Song;
  handleClick: () => void;
}

export const SongItem = (props: SongProps) => {
  const { order, song, handleClick } = props;

  return (
    <div className={styles.main}>
      <div className={styles.name} onClick={handleClick}>
        <span>{order}</span>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          {song.name}
        </Typography>
      </div>
      <div className={styles.time}>
        {!song.previewUrl && (
          <Typography variant="subtitle2" color="error" style={{ marginRight: '2rem' }}>
            No hay preview
          </Typography>
        )}
        <Typography variant="subtitle1">{msToTime(song.durationMs)}</Typography>
      </div>
    </div>
  );
};
