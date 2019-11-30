import { Artist, Item, ItemList, Title } from '@shared/index';
import { push } from 'connected-react-router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

interface PageProps {
  artists: Artist[];
}

const Page: FC<PageProps> = props => {
  const { artists } = props;
  const dispatch = useDispatch();

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
              handleClick={() => dispatch(push(a.location, a))}
            />
          ))}
        </ItemList>
      </div>
    </div>
  );
};

export default Page;
