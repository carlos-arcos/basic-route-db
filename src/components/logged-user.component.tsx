import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../core';

export const LoggedUser: React.FC = () => {
  const history = useHistory();
  const { userInfo, setUserInfo } = React.useContext(AuthContext);

  const handleLogout = () => {
    if (userInfo) {
      setUserInfo(null);
      history.push('/');
    }
  };

  return (
    <div>
      <h4>Hola: {userInfo} </h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
