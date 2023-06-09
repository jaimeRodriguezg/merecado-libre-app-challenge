import { FC } from 'react';
import { Card, Skeleton } from '../ui';

const CardProductLoadingDetail: FC = () => {
  return (
    <Card className="flex-col sm:flex-row border-b-[0.8px] border-gray-200">
      <div className="flex flex-wrap sm:flex-nowrap align-middle p-4  w-full gap-4">
        {/* Image */}
        <div className="h-40 w-40 flex justify-center align-middle">
          <Skeleton variant="rounded" size="xl" />
        </div>
        {/* Detail */}
        <div className="flex flex-col gap-3">
          <Skeleton variant="semirounded" width={300} />
          <p className="text-xl font-semibold">
            <Skeleton variant="semirounded" width={200} />
          </p>
          <Skeleton variant="semirounded" width={100} />
        </div>
      </div>
    </Card>
  );
};

export default CardProductLoadingDetail;
