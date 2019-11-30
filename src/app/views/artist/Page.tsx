import { Button, Typography } from '@material-ui/core';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Album, Artist, Item, ItemList, Title } from '@shared/index';
import { push } from 'connected-react-router';
import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { ColorExtractor } from 'react-color-extractor';

interface PageProps {
  artist: Artist;
  albums: Album[];
}

const Page: FC<PageProps> = props => {
  const { artist, albums } = props;
  const dispatch = useDispatch();
  const [imageColors, setImageColors] = useState<string[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (imageColors.length) {
      const color = imageColors[Math.floor(Math.random() * imageColors.length)];
      setBackgroundColor(color);
    }
  }, [imageColors]);

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
          <div className={styles.actions}>
            <Button variant="contained" startIcon={<ShuffleIcon />}>
              Aleatorio
            </Button>
          </div>
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
              handleClick={() => dispatch(push(a.location, a))}
            />
          ))}
        </ItemList>
      </div>
    </div>
  );
};

export default Page;
