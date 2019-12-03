import { Typography } from '@material-ui/core';
import { Album, Artist, getRandomItem, Item, ItemList, Title } from '@shared/index';
import React, { FC, memo, useEffect, useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import styles from './styles.module.scss';

export interface PageProps {
  artist: Artist;
  albums: Album[];
  setSelectedAlbum: (album: Album) => void;
}

const Page: FC<PageProps> = memo(props => {
  const { artist, albums, setSelectedAlbum } = props;
  const [artistImageColors, setArtistImageColors] = useState<string[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (artistImageColors.length) {
      const color = getRandomItem(artistImageColors);
      setBackgroundColor(color);
    }
  }, [artistImageColors]);

  return (
    <div className={styles.main}>
      <ColorExtractor src={artist.image} getColors={setArtistImageColors} />

      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${artist.image})`, backgroundColor }}
        test-id="banner"
      >
        <div className={styles.info}>
          <Title tag="h3" label={artist.name} className="name-artist" />
          <Typography className={styles.subtitle} variant="subtitle1" color="primary">
            <span test-id="popularity">{`Popularidad • ${artist.popularity}`}</span>
          </Typography>
        </div>
      </div>

      <div className={styles.albums}>
        <div className={styles.title}>
          <Title tag="h4" label="Álbumes" />
        </div>
        <ItemList>
          {albums.map((a, i) => (
            <Item
              key={i}
              className="album"
              image={a.image}
              title={a.name}
              subtitle={`Canciones • ${a.totalTracks}`}
              variant="rounded"
              handleClick={() => setSelectedAlbum(a)}
            />
          ))}
        </ItemList>
      </div>
    </div>
  );
});

export default Page;
