'use client';
import { FC } from 'react';
import Logo from './Logo';
import Searcher from './Searcher';
import Publicity from './Publicity';

const Navbar: FC = () => {
  return (
    <header>
      <nav className="bg-primary h-[50px] pr-4 pl-4 sm:pr-24 sm:pl-24 md:pr-48 md:pl-48 pt-[8px] pb-[12px]">
        <div className="flex justify-between ">
          <Logo />
          <Searcher />
          <Publicity />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
