import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { ConnectedRouter } from 'connected-react-router';
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './redux';
import routes from './routes';
import Theme from './theme';

const getRoutes = () => routes.map(route => <Route key={route.path} {...route} />);

const App: FC = () => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Switch>{getRoutes()}</Switch>
      </ThemeProvider>
    </ConnectedRouter>
  </ReduxProvider>
);

export default App;
