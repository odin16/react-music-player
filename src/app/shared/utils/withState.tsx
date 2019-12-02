import { push } from 'connected-react-router';
import { isEmpty, isNil } from 'ramda';
import React, { createFactory, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Selector = (state: RootState) => any;

interface WithStateOptions {
  component: FC<any>;
  selector: Selector;
  validateNil?: boolean;
  redirect?: string;
}

export function withState(options: WithStateOptions): FC<any> {
  const Handle: FC = () => {
    const opts = {
      ...options,
      validateNil: options.validateNil || false,
      redirect: options.redirect || '/'
    };
    const dispatch = useDispatch();
    const state = useSelector(opts.selector);
    const validationBase = state === undefined || isEmpty(state);
    const validationWithNull = validationBase || isNil(state);
    const validation = opts.validateNil ? validationWithNull : validationBase;

    if (validation) {
      dispatch(push(opts.redirect));
      return null;
    }

    return <opts.component />;
  };

  return createFactory<any>(Handle);
}
