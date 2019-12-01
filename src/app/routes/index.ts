import { Album } from '@app/components/Album';
import { Artist } from '@app/components/Artist';
import { Home } from '@app/components/Home';

const routes = [
  {
    path: '/',
    component: Home,
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
  }
];

export default routes;
