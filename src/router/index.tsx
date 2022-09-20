import HomeView from 'views/Home/Home';
import ErrorView from 'views/Error/Error';

const routes = [
  {
    key: 'home',
    path: '/',
    component: <HomeView />
  },
  {
    path: '*',
    key: '404',
    component: <ErrorView />
  }
];

export default routes;
