import React from 'react';
import { Link } from 'react-router-dom';

export const LoginView: React.FC = () => {
  return (
    <div>
      <h3>Login view</h3>
      <Link to="/dashboard">
        <button type="button">Login</button>
      </Link>
    </div>
  );
};
