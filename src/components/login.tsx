import React from 'react';
import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {
  const history = useHistory();
  const handleNavigation = () => {
    history.push('/');
  };

  return (
    <>
      <div className="login">
        <p>Login page</p>
        <button onClick={handleNavigation}>Login</button>
      </div>
    </>
  );
};
