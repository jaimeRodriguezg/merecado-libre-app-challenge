import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar, Main } from './components';
import Providers from './providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mercado Libre',
  description: 'Mercado Libre App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
