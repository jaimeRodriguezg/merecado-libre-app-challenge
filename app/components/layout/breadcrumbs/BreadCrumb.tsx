'use client';
import { FC, ReactNode } from 'react';

interface BreadCrumbProps {
  children: ReactNode;
}

const BreadCrumb: FC<BreadCrumbProps> = ({ children }) => {
  return <div className="flex gap-2 mt-3 mb-3">{children}</div>;
};

export default BreadCrumb;
