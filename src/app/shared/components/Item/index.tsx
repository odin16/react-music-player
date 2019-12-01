import { Avatar, Typography } from '@material-ui/core';
import React, { CSSProperties } from 'react';
import styles from './styles.module.scss';

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
