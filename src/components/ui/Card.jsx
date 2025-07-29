import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

/**
 * Composant Card réutilisable
 * @param {Object} props - Propriétés du composant
 * @returns {JSX.Element} Composant Card
 */
const Card = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const cardClasses = [
    'card',
    `card--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {(title || subtitle) && (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card__body">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined'])
};

export default Card; 