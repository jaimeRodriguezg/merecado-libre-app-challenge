'use client';
import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface BreadCrumbDetailProps {
  children: ReactNode;
  path: string;
}

const BreadCrumbDetail: FC<BreadCrumbDetailProps> = ({ children, path }) => {
  return (
    <Link href={path}>
      <p className="text-gray-600 hover:text-secondary">{children}</p>
    </Link>
  );
};

export default BreadCrumbDetail;
