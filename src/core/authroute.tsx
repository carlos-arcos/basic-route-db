import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { AuthContext } from '../core';

export const AutRouteComponent: React.FC<RouteProps> = props => {
  const { userInfo } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};
