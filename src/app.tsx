import React from 'react';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import './assets/css/app.css';
import { Sidebar } from './components/sidebar';
import { Layout } from './components/layout';

const App: React.FunctionComponent = () => {
  return (
    <div className="grid-container">
      <HashRouter>
        <Sidebar />
        <Layout />
      </HashRouter>
    </div>
  );
};

export default hot(App);
