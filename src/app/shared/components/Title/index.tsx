import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import styles from './styles.module.scss';

interface TitleProps extends TypographyProps {
  tag: any;
  label: string;
  className?: string;
}

export const Title = (props: TitleProps) => {
  const { tag, label, className } = props;

  return (
    <div className={`${styles.main} ${className}`}>
      <Typography color="textPrimary" variant={tag} style={{ fontWeight: 'bold' }}>
        <span test-id="section-title">{label}</span>
      </Typography>
    </div>
  );
};
