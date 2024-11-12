import { Navbar } from '@/components/navbar';
import { ReturnTopButton } from '@/components/return-top-button';
import type React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='pb-12 text-sm'>{children}</div>
      <ReturnTopButton />
    </>
  );
}
