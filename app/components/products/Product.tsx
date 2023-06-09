'use client';
import { Item } from '@/graphql/generated/schema';
import { FC } from 'react';
import { Button, Card } from '../ui';
import Image from 'next/image';
import { format } from '../../utils/currency';

interface ProductProps {
  item: Item;
}

const Product: FC<ProductProps> = ({ item }) => {
  return (
    <Card className="w-full flex-col p-5 mb-10">
      <div className="flex flex-wrap justify-around w-full gap-4">
        <Image src={item.pictures[0].url} alt={''} width={500} height={500} />
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-400">{item.condition}</p>
          <p className="text-lg font-semibold">{item.title}</p>
          <p className="text-xl font-semibold">
            {format({
              currency: item.price.currency,
              price: item.price.amount,
              decimals: item.price.decimals,
            })}
          </p>
          <Button>Comprar</Button>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-lg"> Descripción del Producto</p>
        <p className="text-base text-gray-600">{item.description}</p>
      </div>
    </Card>
  );
};

export default Product;
