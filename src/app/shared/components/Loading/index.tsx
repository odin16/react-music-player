import { CircularProgress } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import styles from './styles.module.scss';
import { omit } from 'ramda';

interface LoadingProps extends CircularProgressProps {
  fix?: boolean;
  mainStyles?: CSSProperties;
}

export const Loading = (props: LoadingProps) => {
  const { fix, mainStyles } = props;
  const classes = classNames(styles.main, { [styles.fixed]: !!fix });
  const circularProgressProps = omit(['fix', 'mainStyles']);

  return (
    <div className={classes} style={mainStyles}>
      <CircularProgress color="secondary" {...circularProgressProps} />
    </div>
  );
};
