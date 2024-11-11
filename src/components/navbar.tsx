import { Logo } from '@/components/logo';
import { links } from '@/lib/constants/links';
import { Icon } from '@iconify-icon/react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar } from '@nextui-org/navbar';

export function Navbar() {
  return (
    <NextUINavbar maxWidth='xl' className='h-20'>
      <NavbarBrand>
        <Logo height={18} />
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <div className='flex items-center gap-1'>
            <Button as={Link} href={links.docs} variant='light' isExternal isIconOnly>
              <Icon
                icon='solar:book-bookmark-minimalistic-bold'
                className='text-[24px] text-default-500'
              />
            </Button>
            <Button as={Link} href={links.discord} variant='light' isExternal isIconOnly>
              <Icon icon='akar-icons:discord-fill' className='text-[24px] text-default-500' />
            </Button>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href={links.dashboard} color='primary' isExternal>
            ダッシュボード
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
