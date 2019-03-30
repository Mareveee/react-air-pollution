import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayouts from './container/DefaultLayouts';


function Loading() {
  return <div>Loading...</div>;
}


const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

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
const routess = [
  { path: '/admin', exact: true, name: 'Home', component: DefaultLayouts },
  { path: '/dashboardad', name: 'Dashboard', component: Dashboard },
  { path: '/data/AQIad', name: 'AQI', component: AQI },
  { path: '/data/historicalad', name: 'Historical Data', component: Historical },
  { path: '/NetworkServerad', name: 'NetworkServer', component: AQI },
];

export default routess;
