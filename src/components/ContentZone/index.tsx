import React, { FC } from 'react';
import './style.scss';

export const ContentZone: FC = ({ children }) => {
  return (
    <div className="content-zone">
      {children}
      <div className="h-l" />
      <div className="v-l" />
    </div>
  );
};
