import React, { FC } from 'react';

interface FormProps {
  onSubmit: (data: any) => void;
}

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
