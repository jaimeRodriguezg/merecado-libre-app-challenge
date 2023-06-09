import { FC } from 'react';
import Image from 'next/image';
import { GeneralItem } from '@/graphql/generated/schema';
import { Button, Card } from '../ui';
import { format } from '../../utils/currency';
import { useRouter } from 'next/navigation';
import { condition } from '../../utils/condition';
import { ConditionValueType } from '@/app/types/conditions.types';

interface CardProductProps {
  item: GeneralItem;
}

const CardProduct: FC<CardProductProps> = ({ item }) => {
  const router = useRouter();

  return (
    <Card className="flex-col sm:flex-row border-b-[0.8px] border-gray-200">
      <div className="flex flex-wrap sm:flex-nowrap align-middle p-4  w-full gap-4">
        {/* Image */}
        <div className="h-40 w-40 flex justify-center align-middle">
          <Image
            src={item?.thumbnail}
            alt={item?.title}
            width={100}
            height={100}
          />
        </div>
        {/* Detail */}
        <div className="flex flex-col gap-3">
          <p className="text-xl">{item?.title}</p>
          <p className="text-xl font-semibold">
            {format({
              currency: item?.price.currency,
              price: item?.price.amount,
              decimals: item.price.decimals,
            })}
          </p>
          <p className="text-lg text-gray-500">
            {condition(item?.condition as ConditionValueType)}
          </p>
        </div>
      </div>
      <div className="flex flex-col align-midle justify-between p-4">
        <p className="text-base font-light text-green-600 whitespace-nowrap ">
          {item?.free_shipping && 'Envio gratuito'}
        </p>
        <Button
          className="flex whitespace-nowrap"
          onClick={() => router.push(`/items/${item.id}`)}
        >
          Ver más
        </Button>
      </div>
    </Card>
  );
};

export default CardProduct;
