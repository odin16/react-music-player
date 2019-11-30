import Album from '@app/views/album';
import Artist from '@app/views/artist';
import Genres from '@app/views/genres';
import Home from '@src/app/views/home';

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
    path: '/artist/:id/',
    component: Artist,
    exact: true
  },
  {
    path: '/album/:id/',
    component: Album,
    exact: true
  },
  {
    path: '/song/:id/',
    exact: true
  }
];

export default routes;
