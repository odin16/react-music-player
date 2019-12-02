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
    <div className={styles.main} onClick={handleClick}>
      <div className={styles.order}>
        <Typography variant="subtitle1">{order}</Typography>
      </div>
      <div className={styles.name}>
        <Typography
          variant="subtitle1"
          style={{
            fontWeight: 'bold'
          }}
        >
          {song.name}
        </Typography>
        {!song.previewUrl && (
          <Typography variant="subtitle2" color="error">
            No hay preview
          </Typography>
        )}
      </div>
      <div className={styles.time}>
        <Typography variant="subtitle1">{msToTime(song.durationMs)}</Typography>
      </div>
    </div>
  );
};
