import { FC, ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="bg-background p-0 pr-4 pl-4 sm:pr-24 sm:pl-24 md:pr-48 md:pl-48 h-full">
      {children}
    </main>
  );
};

export default Main;
