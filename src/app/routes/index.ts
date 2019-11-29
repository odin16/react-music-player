import Home from '@src/app/views/home';
import Genres from '@app/views/genres';
import Artists from '@app/views/artists';
import Albums from '@app/views/albums';
import Songs from '@app/views/songs';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/genres',
    component: Genres,
    exact: true
  },
  {
    path: '/artists',
    component: Artists,
    exact: true
  },
  {
    path: '/albums',
    component: Albums,
    exact: true
  },
  {
    path: '/songs',
    component: Songs,
    exact: true
  }
];

export default routes;
