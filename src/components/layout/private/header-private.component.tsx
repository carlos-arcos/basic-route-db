import React from 'react';
import { LoggedUser } from '../../logged-user.component';

export const PrivateHeader: React.FC = () => {
  return (
    <div className="navbar">
      <h4>Header - (private layout)</h4>
      <LoggedUser />
    </div>
  );
};
