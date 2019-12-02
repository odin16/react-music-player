import { Album } from '@app/components/Album';
import { Artist } from '@app/components/Artist';
import { Home } from '@app/components/Home';
import { withState } from '@shared/index';

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
    component: withState(Album),
    exact: true
  },
  {
    path: '*',
    component: Home,
    exact: true
  }
];

export default routes;
