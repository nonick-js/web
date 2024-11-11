import { Navbar } from '@/components/navbar';
import type React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='pb-12'>{children}</div>
    </>
  );
}
