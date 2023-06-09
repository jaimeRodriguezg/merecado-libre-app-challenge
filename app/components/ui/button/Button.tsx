'use client';
import { ButtonHTMLAttributes, FC, ReactElement } from 'react';

type IconPosition = 'start' | 'end';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | 'primary'
    | 'secondary'
    | 'background'
    | 'success'
    | 'warning'
    | 'error';
  icon?: ReactElement;
  iconPosition?: IconPosition;
}

const Button: FC<ButtonProps> = ({
  color = 'secondary',
  className,
  icon,
  iconPosition = 'start',
  ...props
}) => {
  let colorClasses = '';

  switch (color) {
    case 'primary':
      colorClasses = 'bg-primary text-white';
      break;
    case 'secondary':
      colorClasses = 'bg-secondary hover:bg-secondaryHover text-white';
      break;
    case 'background':
      colorClasses = 'bg-background  text-white';
      break;

    case 'success':
      colorClasses = 'bg-green-500 hover:bg-green-600 text-white';
      break;
    case 'warning':
      colorClasses = 'bg-yellow-500 hover:bg-yellow-600 text-white';
      break;
    case 'error':
      colorClasses = 'bg-red-500 hover:bg-red-600 text-white';
      break;
    default:
      colorClasses = 'bg-secondary hover:bg-secondaryHover text-white';
  }

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded flex items-center justify-center ${colorClasses} ${className}`}
    >
      {icon && iconPosition === 'start' && <span className="mr-2">{icon}</span>}
      {props.children}
      {icon && iconPosition === 'end' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
