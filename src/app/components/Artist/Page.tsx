import { Typography } from '@material-ui/core';
import { Album, Artist, Item, ItemList, Title } from '@shared/index';
import React, { FC, useEffect, useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import styles from './styles.module.scss';

interface PageProps {
  artist: Artist;
  albums: Album[];
  goTo: (location: string, context: any) => void;
}

const Page: FC<PageProps> = props => {
  const { artist, albums, goTo } = props;
  const [imageColors, setImageColors] = useState<string[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (imageColors.length) {
      const color = imageColors[Math.floor(Math.random() * imageColors.length)];
      setBackgroundColor(color);
    }
  }, [imageColors]);

  const handleItemClick = (album: Album) => {
    const shuffled = albums.filter(a => a.id !== album.id).sort(() => 0.5 - Math.random());
    const suggestedAlbums = shuffled.slice(0, 2);

    goTo(album.location, {
      albumSelected: album,
      suggestedAlbums
    });
  };

  return (
    <div className={styles.main}>
      <ColorExtractor src={artist.image} getColors={setImageColors} />

      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${artist.image})`, backgroundColor }}
      >
        <div className={styles.info}>
          <Title tag="h3" label={artist.name} />
          <Typography className={styles.subtitle} variant="subtitle1" color="primary">
            {`Popularidad • ${artist.popularity}`}
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
              image={a.image}
              title={a.name}
              subtitle={`Canciones • ${a.totalTracks}`}
              variant="rounded"
              handleClick={() => handleItemClick(a)}
            />
          ))}
        </ItemList>
      </div>
    </div>
  );
};

export default Page;
