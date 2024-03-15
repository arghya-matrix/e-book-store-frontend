import React from 'react';
import './style/Box.css'; // Import your custom CSS (optional)

const Box = ({ children, className = '', ...props }) => {
  return (
    <div className={`box ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Box;
