import React, { Component } from 'react';
import { Route } from 'react-router-dom';

interface Layout {
  component: any;
  path?: string;
  exact?: boolean;
  layout: any;
}

const AppRoute: React.FC<Layout> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AppRoute;
