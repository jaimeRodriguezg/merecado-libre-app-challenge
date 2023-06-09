'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../ui';

const Error: FC = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Error, por favor recarga la página
      </h1>
      <Button
        onClick={() => router.push('/')}
        className="py-2 px-4 bg-blue-600 text-white rounded-md"
      >
        Ir a la página principal
      </Button>
    </div>
  );
};

export default Error;
