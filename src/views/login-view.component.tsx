import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../core';

export const LoginView: React.FC = () => {
  const history = useHistory();
  const { setUserInfo } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('admin');
  const [password, setPassword] = React.useState('test');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test') {
      setUserInfo(username);
      history.push('/dashboard');
    } else {
      alert('User or Password not valid');
    }
  };

  return (
    <div>
      <h3>Login view</h3>
      <form onSubmit={handleLogin}>
        <div>
          <div>
            <label>User name</label>
            <input value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
