import React from 'react';

const Button = ({
  href, title, className, onClick, target,
}) => (
  <a href={href} className={className} onClick={onClick} rel="noopener noreferrer" target={target}>{title}</a>
);

export default Button;
