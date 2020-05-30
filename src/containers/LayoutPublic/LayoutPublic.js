import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import Navbar from './Navbar';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <LayoutHeader />
      <Switch>
        {routes.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          );
        })}
      </Switch>
      <LayoutFooter />
    </div>
  );
};

export default LayoutPublic;
