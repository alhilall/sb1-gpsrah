import { ReactNode } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import CreatePostButton from './CreatePostButton';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-gray-100">
      <Header />
      <main className="pb-16 pt-14">
        {children}
      </main>
      <CreatePostButton />
      <Navbar />
    </div>
  );
}

export default Layout;