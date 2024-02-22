import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const Auth: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Auth;
