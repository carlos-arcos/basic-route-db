import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import './assets/css/app.css';
import AppRoute from './AppRoute.component';
import { PrivateLayout } from './components/layout/private';
import { PublicLayout } from './components/layout/public';
import {
  HomeView,
  AboutView,
  LoginView,
  DashboardView,
  UserprofileView,
} from './views';

const App = () => {
  return (
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
        <AppRoute
          exact
          path="/dashboard"
          component={DashboardView}
          layout={PrivateLayout}
        />
        <AppRoute
          exact
          path="/userprofile"
          component={UserprofileView}
          layout={PrivateLayout}
        />
      </Switch>
    </HashRouter>
  );
};

export default App;
