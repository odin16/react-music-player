import React from 'react';
import styles from './styles.module.scss';
import { Song, Album, Artist } from '@shared/models';

interface PlayerProps {
  album: Album;
  song: Song;
}

export const Player = (props: PlayerProps) => {
  const { song } = props;

  return <div className={styles.main}></div>;
};
