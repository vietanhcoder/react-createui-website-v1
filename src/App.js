import React, { lazy, memo, Suspense, useState, useEffect } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { WidthPageContext } from './useContext/UseContext';
import { Overlay } from './StyledComponents/molecules/GlobalMoleculeStyle';
const Login = lazy(() => import('./modules/Login/containers/Login'));
const LayoutPublic = lazy(() => import('./containers/LayoutPublic/LayoutPublic'));

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  } 
  return (
    <HashRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <WidthPageContext.Provider value={[isSmallScreen, setIsSmallScreen]}>
            <Route exact path="/" name="Home" component={LayoutPublic} />
            <Route exact path="/login" name="Login" component={Login} />
            <Overlay />
          </WidthPageContext.Provider>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default memo(App);
