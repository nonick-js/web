import { Logo } from '@/components/logo';
import { links } from '@/lib/constants/links';
import { Icon } from '@iconify-icon/react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar } from '@nextui-org/navbar';
import { Tooltip } from '@nextui-org/tooltip';
import NextLink from 'next/link';

export function Navbar() {
  return (
    <NextUINavbar maxWidth='xl' className='h-20'>
      <NavbarBrand as={NextLink} href='/'>
        <Logo height={18} />
      </NavbarBrand>
      <NavbarContent justify='end' className='max-sm:gap-2'>
        <NavbarItem>
          <div className='flex items-center gap-1'>
            <Tooltip content='ドキュメント' placement='bottom' delay={500}>
              <Button
                as={Link}
                aria-label='ドキュメント'
                href={links.docs}
                variant='light'
                isExternal
                isIconOnly
              >
                <Icon
                  icon='solar:book-bookmark-minimalistic-bold'
                  className='text-[24px] text-default-500'
                />
              </Button>
            </Tooltip>
            <Tooltip content='サポートサーバー' placement='bottom' delay={500}>
              <Button
                as={Link}
                aria-label='サポートサーバー'
                href={links.discord}
                variant='light'
                isExternal
                isIconOnly
              >
                <Icon icon='akar-icons:discord-fill' className='text-[24px] text-default-500' />
              </Button>
            </Tooltip>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href={links.dashboard}
            color='primary'
            className='max-sm:min-w-10'
            startContent={<Icon icon='solar:settings-bold' className='sm:hidden text-[24px]' />}
            isExternal
          >
            <span className='max-sm:hidden'>ダッシュボード</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
