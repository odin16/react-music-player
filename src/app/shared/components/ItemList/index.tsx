import React, { FC } from 'react';
import styles from './styles.module.scss';

interface ItemListProps {}

export const ItemList: FC<ItemListProps> = props => {
  return <div className={styles.main}>{props.children}</div>;
};
