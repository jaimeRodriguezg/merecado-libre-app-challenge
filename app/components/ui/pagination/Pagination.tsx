'use client';
import { FC, useCallback, useState } from 'react';
import { PageInfo } from '../../../../graphql/generated/schema';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Button from '../button/Button';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface PaginationProps {
  pageInfo: PageInfo;
}

const Pagination: FC<PaginationProps> = ({ pageInfo }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(pageInfo.currentPage);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const pageSize = pageInfo.perPage;

  const handleNext = () => {
    if (pageInfo.hasNextPage) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage + 1;
        const newOffset = newPage * pageSize;
        const newQueryString = createQueryString(
          'offset',
          newOffset.toString(),
        );
        router.push(`${pathname}?${newQueryString}`);
        return newPage;
      });
    }
  };

  const handlePrevious = () => {
    if (pageInfo.hasPreviousPage) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1;
        const newOffset = newPage * pageSize;
        const newQueryString = createQueryString(
          'offset',
          newOffset.toString(),
        );
        router.push(`${pathname}?${newQueryString}`);
        return newPage;
      });
    }
  };
  return (
    <div className="flex mt-10 mb-10 justify-center align-middle">
      <div className="flex gap-4 items-center">
        <Button onClick={handlePrevious} disabled={!pageInfo.hasPreviousPage}>
          <AiOutlineArrowLeft />
        </Button>
        <span className="text-gray-500">{`${currentPage} de ${pageInfo.totalPages}`}</span>
        <Button onClick={handleNext} disabled={!pageInfo.hasNextPage}>
          <AiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
