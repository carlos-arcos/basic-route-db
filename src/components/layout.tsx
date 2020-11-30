import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Dashboard } from './dashboard';
import { Userprofile } from './user-profile';

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route excat path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/userprofile" component={Userprofile} />
      </Switch>
      <Footer />
    </>
  );
};
