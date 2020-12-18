import { lazy } from 'react';

export const lazyRoutes = [
  {
    path: '/',
    label: 'home',
    exact: true,
    component: lazy(() =>
      import('./views/HomePageViews' /* webpackChunkName: "home" */),
    ),
  },

  {
    path: '/movies',
    label: 'moviesPage',
    exact: true,
    component: lazy(() =>
      import('./views/MoviesPageViews' /* webpackChunkName: "moviesPage" */),
    ),
  },

  {
    path: '/movies/:movieId',
    label: 'detailsPage',
    exact: false,
    component: lazy(() =>
      import(
        './views/MovieDetailsPageViews' /* webpackChunkName: "detailsPage" */
      ),
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
