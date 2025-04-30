import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#ff6b66] hover:bg-[#e94c46] text-white focus:ring-[#e94c46]',
    secondary: 'bg-[#2f3d4d] hover:bg-[#263442] text-white focus:ring-[#2f3d4d]',
    outline: 'border-2 border-[#e94c46] text-[#e94c46] bg-white bg-opacity-90 hover:bg-gray-50 focus:ring-[#e94c46]'
  };
  
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;
  
  return (
    <button className={allStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;