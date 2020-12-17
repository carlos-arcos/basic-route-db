import React from 'react';
import { PrivateHeader } from './';
import { PrivateFooter } from './';
import { PrivateSidebar } from './';

export const PrivateLayout: React.FC = ({ children }) => {
  return (
    <div className="grid-container">
      <PrivateSidebar />
      <PrivateHeader />
      {children}
      <PrivateFooter />
    </div>
  );
};
