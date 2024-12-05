import React from 'react';
import { Button } from 'react-bootstrap';

export const RegisterButton = ({ children, onClick, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <Button className="px-5" onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

