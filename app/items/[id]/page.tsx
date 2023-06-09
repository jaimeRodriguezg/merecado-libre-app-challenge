import Image from 'next/image';
import { BreadCrumbs, Button, Card } from '../../components';
import { format } from '../../utils/currency';
import { ItemsQuery } from '../../../graphql/generated/schema';
import { condition } from '../../utils/condition';
import { ConditionValueType } from '../../types/conditions.types';

import { gql } from '@apollo/client';
import { getClient } from '../../lib/apollo';
import { Metadata } from 'next';
import { Author } from '@/app/utils/autor';
import ProductLoading from '@/app/components/products/ProductLoading';

const GET_QUERY = gql`
  query Items($itemsId: String!, $name: String!, $lastName: String!) {
    items(id: $itemsId, name: $name, lastName: $lastName) {
      item {
        id
        title
        price {
          currency
          amount
          decimals
        }
        thumbnail
        condition
        free_shipping
        sold_quantity
        description
        pictures {
          id
          url
        }
      }
      author {
        name
        lastname
      }
    }
  }
`;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query<ItemsQuery>({
    query: GET_QUERY,
    variables: {
      name: Author.name,
      lastName: Author.lastName,
      itemsId: params.id,
    },
  });

  const metadata: Metadata = {
    title: data.items.item.title,
    description: data.items.item.description,
    authors: data.items.author,
    keywords: data.items.item.title,

    openGraph: {
      images: data.items.item.pictures.map((img) => img.url),
    },
  };

  return metadata;
}

const Item = async ({ params }: { params: { id: string } }) => {
  const client = getClient();

  const { data } = await client.query<ItemsQuery>({
    query: GET_QUERY,
    variables: {
      name: Author.name,
      lastName: Author.lastName,
      itemsId: params.id,
    },
  });

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
              <p className="text-sm text-gray-500">
                {condition(data?.items.item.condition as ConditionValueType)}
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
              <Button className="mt-5">Comprar</Button>
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
