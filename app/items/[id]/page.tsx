'use client';
import Image from 'next/image';
import { BreadCrumbs, Button, Card, Error } from '../../components';
import ProductLoading from '../../components/products/ProductLoading';
import { Author } from '../../utils/autor';
import { format } from '../../utils/currency';
import { useItemsQuery } from '../../../graphql/generated/schema';

const Item = ({ params }: { params: { id: string } }) => {
  const { data, loading, error } = useItemsQuery({
    variables: {
      itemsId: params.id,
      name: Author.name,
      lastName: Author.lastName,
    },
  });

  if (loading) return <ProductLoading />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <BreadCrumbs category={data?.items.item.title} />
      {data?.items.item && (
        <Card className="w-full flex-col p-5 mb-10">
          <div className="flex flex-wrap justify-around w-full gap-4">
            <Image
              src={data?.items.item.pictures[0].url}
              alt={''}
              width={500}
              height={500}
            />
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400">
                {data?.items.item.condition}
              </p>
              <p className="text-lg font-semibold">{data?.items.item.title}</p>
              <p className="text-xl font-semibold">
                {' '}
                {format({
                  currency: data?.items.item?.price.currency,
                  price: data?.items.item?.price.amount,
                  decimals: data?.items.item.price.decimals,
                })}
              </p>
              <Button>Comprar</Button>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-lg"> Descripción del Producto</p>
            <p className="text-base text-gray-600">
              {data.items.item.description}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Item;
