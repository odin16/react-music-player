import { push } from 'connected-react-router';
import React, { createFactory, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export function withState(WrappedComponent: FC<any>, redirect = '/'): FC<any> {
  const Handle: FC = () => {
    const dispatch = useDispatch();
    const { state } = useLocation();

    if (!state) {
      dispatch(push(redirect));
      return null;
    }

    return <WrappedComponent />;
  };

  return createFactory<any>(Handle);
}
