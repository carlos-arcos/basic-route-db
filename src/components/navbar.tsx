import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <h4>navbar</h4>
        <Link to="/userprofile">User</Link>
      </div>
    </>
  );
};
