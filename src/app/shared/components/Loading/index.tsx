import { CircularProgress } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import styles from './styles.module.scss';

interface LoadingProps extends CircularProgressProps {
  fixed: boolean;
  mainStyles: CSSProperties;
}

export const Loading = (props: Partial<LoadingProps>) => {
  const { fixed, mainStyles } = props;
  const classes = classNames(styles.main, { [styles.fixed]: !!fixed });

  return (
    <div className={classes} style={mainStyles}>
      <CircularProgress color="secondary" {...props} />
    </div>
  );
};
