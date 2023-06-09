'use client';
import { FC } from 'react';

interface TitleProps {
  title: string;
  className?: string;
  subtitle?: string;
}

const Title: FC<TitleProps> = ({ title, className, subtitle }) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <h3 className="text-2xl font-light text-gray-600">{title}</h3>
      {subtitle && (
        <p className="text-sm text-center text-secondary hover:cursor-pointer">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
