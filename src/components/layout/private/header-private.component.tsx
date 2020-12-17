import React from 'react';
import { Link } from 'react-router-dom';

export const PrivateHeader: React.FC = () => {
  return (
    <div className="navbar">
      <h4>Header - (private layout)</h4>
      <Link to="/">Logout</Link>
    </div>
  );
};
