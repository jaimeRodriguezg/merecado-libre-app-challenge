'use client';
import { useSearcherPaginationQuery } from '@/graphql/generated/schema';
import { useSearchParams } from 'next/navigation';
import {
  CardProduct,
  BreadCrumbs,
  CardsLoading,
  Pagination,
  Error,
} from '../components';
import { Author } from '../utils/autor';

const Items = () => {
  const searchParams = useSearchParams();

  const { data, loading, error } = useSearcherPaginationQuery({
    variables: {
      name: Author.name,
      lastName: Author.lastName,
      search: (searchParams.get('search') as string) ?? 'perros',
      limit: parseInt((searchParams.get('limit') as string) ?? 4),
      offset: parseInt((searchParams.get('offset') as string) ?? 0),
    },
  });

  if (loading) return <CardsLoading />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <BreadCrumbs categories={data?.searcherPagination.categories} />
      {data?.searcherPagination.items.map((item) => (
        <CardProduct key={item.id} item={item} />
      ))}
      {data?.searcherPagination.pageInfo && (
        <Pagination pageInfo={data?.searcherPagination.pageInfo} />
      )}
    </div>
  );
};

export default Items;
