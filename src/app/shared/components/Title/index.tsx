import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import styles from './styles.module.scss';

interface TitleProps extends TypographyProps {
  tag: any;
  label: string;
}

export const Title = (props: TitleProps) => {
  const { tag, label } = props;

  return (
    <div className={styles.main}>
      <Typography color="textPrimary" variant={tag} style={{ fontWeight: 'bold' }}>
        {label}
      </Typography>
    </div>
  );
};
