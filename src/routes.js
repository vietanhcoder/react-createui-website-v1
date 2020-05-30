import { lazy } from 'react';

const Benefits = lazy(() => import('./modules/Benefits/containers/Benefits'));
const Developers = lazy(() => import('./modules/Developers/containers/Developers'));
const HowitWorks = lazy(() => import('./modules/HowItWork/containers/HowItWork'));
const JoinPostPay = lazy(() => import('./modules/JoinPostPay/containers/JoinPostPay'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/benefits', exact: true, name: 'Benefits', component: Benefits },
  { path: '/developers', exact: true, name: 'Developers', component: Developers },
  { path: '/how-it-works', exact: true, name: 'HowitWorks', component: HowitWorks },
  { path: '/join-postpay', exact: true, name: 'JoinPostPay', component: JoinPostPay },
];
export default routes;
