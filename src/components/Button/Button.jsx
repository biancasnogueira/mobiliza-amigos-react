import React from 'react';
import './Button.css'; // Importando os estilos do botão

const Button = ({ children, className = '', onClick, type = 'button' }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
