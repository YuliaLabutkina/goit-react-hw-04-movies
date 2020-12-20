import { lazy } from 'react';

export const lazyRoutes = [
  {
    path: '/',
    label: 'home',
    exact: true,
    component: lazy(() =>
      import('./pages/HomePage' /* webpackChunkName: "home" */),
    ),
  },

  {
    path: '/movies',
    label: 'moviesPage',
    exact: true,
    component: lazy(() =>
      import('./pages/MoviesPage' /* webpackChunkName: "moviesPage" */),
    ),
  },

  {
    path: '/movies/:movieId',
    label: 'detailsPage',
    exact: false,
    component: lazy(() =>
      import('./pages/MovieDetailsPage' /* webpackChunkName: "detailsPage" */),
    ),
  },
];

export default {
  home: '/',
  moviesPage: '/movies',
  detailsPage: '/movies/:movieId',
  castPage: '/movies/:movieId/cast',
  reviews: '/movies/:movieId/reviews',
};
