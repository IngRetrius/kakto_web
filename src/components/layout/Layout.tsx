import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Header transparent={isHomePage} />
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-20'}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;