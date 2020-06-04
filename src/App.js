import React, { lazy, memo, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { UseContext } from './useContext/UseContext';

const Login = lazy(() => import('./modules/Login/containers/Login'));
const LayoutPublic = lazy(() => import('./containers/LayoutPublic/LayoutPublic'));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <UseContext.Provider>
            <Route exact path="/" name="Home" component={LayoutPublic} />
            <Route exact path="/login" name="Login" component={Login} />
          </UseContext.Provider>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default memo(App);
