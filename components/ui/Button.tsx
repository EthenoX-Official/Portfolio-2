import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-out flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-black text-white dark:bg-white dark:text-black hover:scale-105 hover:shadow-lg dark:hover:shadow-white/20 hover:shadow-black/20",
    secondary: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105",
    outline: "border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:scale-105"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};