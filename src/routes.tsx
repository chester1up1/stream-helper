import React, { Suspense, useContext } from 'react';
import { compose, lazy, mount } from 'navi';
import { Router, View } from 'react-navi';
import { Layout } from 'Layout';
import { AuthContext } from 'contexts/auth';
import { Authorization } from 'modules/authorization';

const routes = compose(
  mount({
    '*': lazy(() => import('modules/entrypoint')),
  })
);

export const Routes = () => {
  const { isAuthorized } = useContext(AuthContext);

  if (isAuthorized) {
    return (
      <Router routes={routes}>
        <Layout>
          <Suspense fallback={null}>
            <View />
          </Suspense>
        </Layout>
      </Router>
    );
  }
  return <Authorization />;
};
