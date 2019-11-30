import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Avatar, Typography } from '@material-ui/core';

export interface ItemProps {
  image: string;
  title?: string;
  variant?: 'circle' | 'rounded' | 'square' | undefined;
  style?: CSSProperties;
  handleClick?: () => void;
  subtitle?: string;
}

export const Item = (props: ItemProps) => {
  const { title, subtitle, image, variant, style, handleClick } = props;

  return (
    <div className={styles.main} style={style} onClick={handleClick}>
      <Avatar alt={title} src={image} className={styles.avatar} variant={variant} />
      {(title || subtitle) && (
        <div className={styles.titles}>
          {title && (
            <div className={styles.title}>
              <div className={styles.link}>{title}</div>
            </div>
          )}
          {subtitle && (
            <Typography className={styles.subtitle} variant="subtitle1">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};
