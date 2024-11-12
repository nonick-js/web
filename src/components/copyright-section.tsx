import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';

export function CopyrightSection() {
  return (
    <div className='flex max-sm:flex-col items-center md:justify-between gap-3 text-sm'>
      <p className='text-default-500'>© NoNICK.js 2021-2024 All Rights Reserved.</p>
      <div className='flex gap-3 h-5'>
        <Link size='sm' href='/tos'>
          利用規約
        </Link>
        <Divider orientation='vertical' />
        <Link size='sm' href='/privacy-policy'>
          プライバシーポリシー
        </Link>
      </div>
    </div>
  );
}
