import { CopyrightSection } from '@/components/copyright-section';
import { Navbar } from '@/components/navbar';
import { ReturnTopButton } from '@/components/return-top-button';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='py-12 flex flex-col gap-16 container'>
        <article className='prose prose-invert max-w-none'>{children}</article>
        <CopyrightSection />
      </div>
      <ReturnTopButton />
    </>
  );
}
