import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}


const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const AQI = Loadable({
  loader: () => import('./views/Data/Colors'),
  loading: Loading,
});

const Historical = Loadable({
  loader: () => import('./views/Data/Typography'),
  loading: Loading,
});





// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/data/AQI', name: 'AQI', component: AQI },
  { path: '/data/historical', name: 'Historical Data', component: Historical },
];

export default routes;
