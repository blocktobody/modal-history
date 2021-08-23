import React, { Suspense } from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import Loading from './components/Loading';

import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > *:not(:last-of-type) {
    margin-right: 20px;
  }
`;

function Router() {
  return (
    <BrowserRouter>
      <Navigation>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/products">목록</NavLink>
        <NavLink to="/products/1">상세</NavLink>
      </Navigation>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/products/:productId"
            component={({
              match,
            }: RouteComponentProps<{ productId: string }>) => (
              <Detail productId={match.params.productId} />
            )}
          />
          <Route exact path="/products">
            <List />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
