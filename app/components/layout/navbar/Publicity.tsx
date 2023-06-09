'use client';
import { FC } from 'react';
import Image from 'next/image';
const Publicity: FC = () => {
  return (
    <div className="hidden sm:block h-44 w-80">
      <Image
        alt="Disney Stars+ Mercado Libre"
        className="md:block cursor-pointer"
        height={30}
        width={500}
        src="/publicity/disney_stars.webp"
        priority
      />
    </div>
  );
};

export default Publicity;
