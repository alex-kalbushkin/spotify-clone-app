import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ disabled, className, children, type = 'button', ...props }, ref) => {
    return (
      <button
        className={twMerge(
          'flex justify-center items-center rounded-full bg-green-500 text-black border border-transparent font-bold p-3 hover:opacity-75 transition disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
