import { CssBaseline } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './redux';
import routes from './routes';
// import { PersistGate } from 'redux-persist/integration/react';

const App: FC = () => (
  <ReduxProvider store={store}>
    {/* <PersistGate loading={<p>Loading</p>} persistor={persistor}> */}
    <ConnectedRouter history={history}>
      <CssBaseline />
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </ConnectedRouter>
    {/* </PersistGate> */}
  </ReduxProvider>
);

export default App;
