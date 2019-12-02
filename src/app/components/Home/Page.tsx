import { Fab } from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { Artist, Item, ItemList, Loading, Title } from '@shared/index';
import React, { FC, memo } from 'react';
import styles from './styles.module.scss';

interface PageProps {
  artists: Artist[];
  loadingRandomSong: boolean;
  playRandomSong: () => void;
  setSelectedArtist: (artist: Artist) => void;
}

const Page: FC<PageProps> = memo(props => {
  const { artists, setSelectedArtist, loadingRandomSong, playRandomSong } = props;

  return (
    <div className={styles.main}>
      <div className={styles.artists}>
        <div className={styles.title}>
          <Title tag="h4" label="Artistas" />
        </div>

        <ItemList>
          {!artists.length && <Loading fixed />}

          {artists.map((a, i) => (
            <Item
              key={i}
              image={a.image}
              title={a.name}
              subtitle={`Popularidad • ${a.popularity}`}
              style={{ textAlign: 'center' }}
              handleClick={() => setSelectedArtist(a)}
            />
          ))}
        </ItemList>
      </div>

      <div className={styles.fab}>
        <Fab
          color="primary"
          style={{ position: 'fixed', bottom: 30, right: 30 }}
          onClick={playRandomSong}
        >
          {loadingRandomSong ? <Loading size={20} color="inherit" /> : <PlayArrow />}
        </Fab>
      </div>
    </div>
  );
});

export default Page;
