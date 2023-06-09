'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo: FC = () => {
  return (
    <div className="h-30 w-40">
      <Link href="/">
        <Image
          alt="Mercado Lobre Chile - Logo"
          className="md:block cursor-pointer"
          height={90}
          width={130}
          src="/logos/MercadoLibre_Logotipo.png"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
