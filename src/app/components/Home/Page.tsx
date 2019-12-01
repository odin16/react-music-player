import { Artist, Item, ItemList, Title } from '@shared/index';
import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Fab } from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';

interface PageProps {
  artists: Artist[];
  goTo: (location: string, context: any) => void;
  getRandomSong: () => void;
}

const Page: FC<PageProps> = props => {
  const { artists, goTo, getRandomSong } = props;

  return (
    <div className={styles.main}>
      <div className={styles.artists}>
        <div className={styles.title}>
          <Title tag="h4" label="Artistas" />
        </div>
        <ItemList>
          {artists.map((a, i) => (
            <Item
              key={i}
              image={a.image}
              title={a.name}
              subtitle={`Popularidad • ${a.popularity}`}
              style={{ textAlign: 'center' }}
              handleClick={() => goTo(a.location, a)}
            />
          ))}
        </ItemList>
      </div>
      <Fab
        color="primary"
        style={{ position: 'fixed', bottom: 30, right: 30 }}
        onClick={getRandomSong}
      >
        <PlayArrow />
      </Fab>
    </div>
  );
};

export default Page;
