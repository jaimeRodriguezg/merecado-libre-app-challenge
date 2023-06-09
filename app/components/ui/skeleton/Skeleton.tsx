'use client';
import { FC } from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface SkeletonProps {
  variant: 'circle' | 'rounded' | 'rectangle' | 'semirounded';
  size?: Size;
  width?: number;
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-40 w-40',
};

const variantClasses: Record<SkeletonProps['variant'], string> = {
  circle: 'rounded-full',
  rounded: 'rounded-xl',
  semirounded: 'rounded-lg',
  rectangle: '',
};

const Skeleton: FC<SkeletonProps> = ({
  variant = 'rectangle',
  size = 'md',
  width,
}) => {
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];

  return (
    <div
      style={{ width: `${width}px` }}
      className={`animate-pulse bg-gray-400 ${sizeClass} ${variantClass} `}
    ></div>
  );
};

export default Skeleton;
