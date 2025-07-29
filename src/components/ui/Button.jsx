import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Composant Button réutilisable
 * @param {Object} props - Propriétés du composant
 * @returns {JSX.Element} Composant Button
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  onClick, 
  className = '', 
  type = 'button',
  ...props 
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    disabled ? 'btn--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button; 