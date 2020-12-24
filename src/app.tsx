import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import './assets/css/app.css';
import { AppRoute } from './AppRoute.component';
import { PrivateLayout } from './components/layout/private';
import { PublicLayout } from './components/layout/public';
import {
  HomeView,
  AboutView,
  LoginView,
  DashboardView,
  UserprofileView,
} from './views';
import { AuthProvider } from './core';
import { AutRouteComponent } from './core/authroute';
const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Switch>
          <AppRoute exact path="/" component={HomeView} layout={PublicLayout} />
          <AppRoute
            exact
            path="/about"
            component={AboutView}
            layout={PublicLayout}
          />
          <AppRoute
            exact
            path="/login"
            component={LoginView}
            layout={PublicLayout}
          />
          <AutRouteComponent path="/dashboard">
            <AppRoute
              exact
              path="/dashboard"
              component={DashboardView}
              layout={PrivateLayout}
            />
          </AutRouteComponent>
          <AutRouteComponent path="/userprofile">
            <AppRoute
              exact
              path="/userprofile"
              component={UserprofileView}
              layout={PrivateLayout}
            />
          </AutRouteComponent>
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
