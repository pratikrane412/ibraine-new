import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 active:scale-95";
  
  const variants = {
    primary: "bg-white text-black hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
    secondary: "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/5",
    outline: "border border-white/20 text-white hover:border-white hover:bg-white/5"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};