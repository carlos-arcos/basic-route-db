import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div>
        <h4>Sidebar</h4>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/userprofile">User profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
