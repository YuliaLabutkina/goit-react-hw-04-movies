import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppBar from '../AppBar';
import PreLoader from '../PreLoader';
import routes from '../../routes';
import { lazyRoutes } from '../../routes';

function App() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<PreLoader />}>
          <Switch>
            {lazyRoutes.map(route => (
              <Route key={route.label} {...route} />
            ))}
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </main>
    </>
  );
}

export default App;
