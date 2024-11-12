import { Card, CardBody, CardFooter, CardHeader, type CardProps } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { cn } from '@nextui-org/theme';
import Image from 'next/image';

export function ReviewSection() {
  return (
    <div className='flex flex-col lg:flex-row gap-2 my-4 p-4 md:p-8 items-center rounded-lg bg-gradient-to-b from-primary-500 to-primary-300'>
      <div className='flex flex-col mx-4 lg:w-[500px] text-center'>
        <h1 className='my-5 font-extrabold text-4xl text-white'>ユーザーの声</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <ReviewCard
          contents='ここぞという機能を取り備えていて大変ありがたいです。特に認証機能や自動アナウンス機能は大変助かっています。'
          user={{ name: 'かなひろ', tag: '@kanahiro', avatar: '/review/user/kanahiro.webp' }}
          server={{
            name: '[MGMG & games]_official_server',
            href: 'https://discord.gg/7qxp22R4jF',
            icon: '/review/server/737274999060299807.gif',
          }}
        />
        <ReviewCard
          contents='使いにくいところやバグを報告するとすぐに修正パッチが入る点が良いです。開発者がすぐに返答してくれるところも◎。'
          user={{ name: 'aro_2752', tag: '@aro_2752', avatar: '/review/user/aro_2752.webp' }}
        />
      </div>
    </div>
  );
}

// #region Components
type reviewCardProps = {
  contents: string;
  user: { name: string; tag: string; avatar: string };
  server?: { name: string; href: string; icon: string };
} & CardProps;

function ReviewCard({ className, contents, user, server, ...props }: reviewCardProps) {
  return (
    <Card className={cn('p-4', className)} {...props}>
      <CardHeader className='flex gap-3'>
        <Image
          className='rounded-lg size-10 pointer-events-none'
          src={user.avatar}
          width={512}
          height={512}
          alt={`${user.name}さんのアバター`}
        />
        <p>
          {user.name}
          <span className='text-default-500 ml-1'>{user.tag}</span>
        </p>
      </CardHeader>
      <CardBody>{contents}</CardBody>
      <CardFooter className='flex gap-3'>
        {server ? (
          <>
            <Image
              className='rounded-full size-10 pointer-events-none'
              src={server.icon}
              width={512}
              height={512}
              alt={`${server.name}のアイコン`}
            />
            <Link className='font-semibold' href={server.href} isExternal showAnchorIcon>
              {server.name}
            </Link>
          </>
        ) : (
          <div className='h-10 flex items-center'>
            <p className='text-default-500'>サーバー非公開</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
// #endregion
