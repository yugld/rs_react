import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
  style?: 'primary' | 'secondary';
};

const Button = ({ children, style, className, ...rest }: ButtonProps) => {
  const defaultStyles =
    'flex items-center justify-center rounded px-12 py-2 text-lg font-medium text-white';

  let colorStyles = '';

  switch (style) {
    case 'primary':
    default:
      colorStyles = 'bg-black';
      break;
    case 'secondary':
      colorStyles = 'bg-yellow-500';
      break;
  }

  const buttonStyles = `${defaultStyles} ${colorStyles} ${className ? className : ''}`;

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
