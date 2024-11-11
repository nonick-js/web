'use client';

import { Icon } from '@/components/iconify-icon';
import { links } from '@/lib/constants/links';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { cn } from '@nextui-org/theme';
import type { HTMLAttributes } from 'react';
import React, { useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const Texts = ['便利', '安全', '簡単'];

export function OverviewSection({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className={cn(className, 'mx-auto max-w-3xl flex flex-col text-center gap-4 md:gap-6')}
      {...props}
    >
      <h1 className='w-full text-4xl md:text-5xl font-black tracking-tight'>
        あなたの
        <span className='inline-block'>Discordサーバーを</span>
        <span className='inline-block'>
          もっと
          <TextTransition className='text-primary' direction='down' inline>
            {Texts[index % Texts.length]}
          </TextTransition>
          に。
        </span>
      </h1>
      <div className='flex justify-center gap-2'>
        <Button
          as={Link}
          href={links.invite}
          startContent={<Icon icon='solar:add-circle-bold' className='text-[20px]' />}
          isExternal
        >
          サーバーに追加
        </Button>
        <Button
          as={Link}
          href={links.dashboard}
          color='primary'
          startContent={<Icon icon='solar:settings-bold' className='text-[20px]' />}
          isExternal
        >
          ダッシュボード
        </Button>
      </div>
    </div>
  );
}
