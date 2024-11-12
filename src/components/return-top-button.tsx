'use client';

import 'scroll-behavior-polyfill';
import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/theme';
import React, { useEffect } from 'react';
import { Icon } from './iconify-icon';

export function ReturnTopButton() {
  const [isActive, setIsActive] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 500;
    const bottomOffset = 100;
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (top <= scrollPosition && scrollPosition < maxScroll - bottomOffset) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <Button
      className={cn('fixed bottom-5 right-5 p-7 duration-500', {
        'opacity-0 pointer-events-none': !isActive,
      })}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      size='lg'
      isIconOnly
      aria-label='トップに戻る'
    >
      <Icon icon='solar:arrow-up-linear' className='text-[24px]' />
    </Button>
  );
}
