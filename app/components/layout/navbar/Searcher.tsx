'use client';
import { FC, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { Input } from '../../ui';

const Searcher: FC = () => {
  const router = useRouter();

  const [value, setValue] = useState('');

  const onSearch = () => {
    router.push(`/items?search=${value}`);
    setValue('');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="border-[1px] bg-white w-full rounded-md md:w-[500px] drop-shadow-sm h-[35px] ">
      <div className="text-sm text-grey flex flex-row justify-between items-center ">
        <div className="sm:block h-[35px] p-2 flex-1 pl-2">
          <Input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div
          className="p-2 text-gray-600 border-l cursor-pointer"
          onClick={onSearch}
        >
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Searcher;
