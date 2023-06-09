'use client';
import { FC } from 'react';
import { Card, Skeleton } from '../ui';

const ProductLoading: FC = () => {
  return (
    <div className="flex p-10 h-screen">
      <Card className="flex justify-center align-middle w-full flex-col p-5 mb-10  h-full">
        <div className="flex flex-wrap justify-around w-full gap-4">
          <Skeleton variant="rounded" size="xl" width={400} />
          <div className="flex flex-col gap-2">
            <Skeleton variant="semirounded" width={200} />
            <Skeleton variant="semirounded" width={300} />
            <Skeleton variant="semirounded" width={300} />
            <Skeleton variant="semirounded" width={100} />
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-5 w-full gap-4">
          <div className="mt-5 mb-5 flex flex-col gap-2">
            <Skeleton variant="semirounded" width={200} />
            <Skeleton variant="semirounded" width={200} />
            <Skeleton variant="semirounded" width={200} />
            <Skeleton variant="semirounded" width={200} />
          </div>
          <div className="mt-5 mb-5 flex flex-col gap-2">
            <Skeleton variant="semirounded" width={200} />
            <Skeleton variant="semirounded" width={300} />
            <Skeleton variant="semirounded" width={300} />
            <Skeleton variant="semirounded" width={100} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductLoading;
