import { Typography } from '@material-ui/core';
import { msToTime, Song } from '@shared/index';
import React from 'react';
import styles from './styles.module.scss';

interface SongProps {
  order: number;
  song: Song;
  className?: string;
  handleClick: () => void;
}

export const SongItem = (props: SongProps) => {
  const { order, song, className, handleClick } = props;

  return (
    <div className={`${styles.main} ${className} song-item`} onClick={handleClick}>
      <div className={styles.order}>
        <Typography variant="subtitle1">
          <span test-id="song-order">{order}</span>
        </Typography>
      </div>
      <div className={styles.name}>
        <Typography
          variant="subtitle1"
          style={{
            fontWeight: 'bold'
          }}
        >
          <span test-id="song-name">{song.name}</span>
        </Typography>
        {!song.previewUrl && (
          <Typography variant="subtitle2" color="error">
            <span test-id="song-preview">No hay preview</span>
          </Typography>
        )}
      </div>
      <div className={styles.time}>
        <Typography variant="subtitle1">
          <span test-id="song-duration">{msToTime(song.durationMs)}</span>
        </Typography>
      </div>
    </div>
  );
};
