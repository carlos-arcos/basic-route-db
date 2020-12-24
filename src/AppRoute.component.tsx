import React, { Component } from 'react';
import { Route } from 'react-router-dom';

interface Layout {
  component: any;
  path?: string;
  exact?: boolean;
  layout: any;
}

export const AppRoute: React.FC<Layout> = props => {
  const { component: Component, layout: Layout, ...rest } = props;

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
