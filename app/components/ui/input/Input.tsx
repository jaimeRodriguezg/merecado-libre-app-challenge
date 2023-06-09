'use client';
import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`w-full border-none focus:border-none focus:outline-none ${props.className}`}
    />
  );
};

export default Input;
