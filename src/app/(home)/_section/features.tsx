import { Icon } from '@/components/iconify-icon';
import { links } from '@/lib/constants/links';
import { Button } from '@nextui-org/button';
import { Card, type CardProps } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { cn } from '@nextui-org/theme';
import Image from 'next/image';
import NextLink from 'next/link';
import type { HTMLAttributes } from 'react';

export function FeatureSection({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col gap-32', className)} {...props}>
      <div className='flex flex-col gap-20 items-center'>
        <Feature
          title='入退室メッセージ'
          description='入退室メッセージを使えば、ユーザーがサーバーに参加・脱退した際にメッセージを送信することができます。新たに参加したメンバーを歓迎したり、サーバーでやっておくべきことを事前に伝えたりすることも可能です。'
          href={`${links.docs}/features/welcome-message/`}
          imageSrc='/feature-images/join-and-leave-message.webp'
        />
        <Feature
          className='md:flex-row-reverse'
          title='サーバー内通報'
          description='スパムメッセージやサーバーのルールに違反したメッセージを、ユーザーが通報機能を使用して運営に報告することができます。メッセージ数が多い大規模なサーバーで、モデレーターの負担を大幅に減らすことができます。'
          href={`${links.docs}/features/report`}
          imageSrc='/feature-images/report.webp'
        />
        <Feature
          title='イベントログ'
          description='タイムアウトやBANはもちろん、メッセージの削除や編集まで、サーバーの様々なイベントの記録を送信することができます。複数のログを1つのチャンネルに送信させたり、それぞれ別のチャンネルに送信させることも可能です。'
          href={`${links.docs}/features/log`}
          imageSrc='/feature-images/event-log.webp'
        />
      </div>
      <div className='flex flex-col gap-12 items-center'>
        <h1 className='w-full text-3xl md:text-4xl font-black tracking-tight text-center'>
          その他の機能
        </h1>
        <div className='w-full grid grid-cols-12 gap-4'>
          <FeatureCard
            title='メッセージURL展開'
            description='サーバーにDiscordのメッセージURLが送信された際に、メッセージの内容を自動で返信するようになります。'
            href={`${links.docs}/features/message-expansion/`}
            icon='solar:link-round-bold'
          />
          <FeatureCard
            title='自動認証レベル変更'
            description='サーバーの認証レベルを特定の時間帯に自動で変更することができます。'
            href={`${links.docs}/features/auto-change-verificationlevel/`}
            icon='solar:shield-check-bold'
          />
          <FeatureCard
            title='自動アナウンス公開'
            description='指定したアナウンスチャンネルに送信されたメッセージを自動で公開することができます。'
            href={`${links.docs}/features/auto-public/`}
            icon='solar:mailbox-bold'
          />
          <FeatureCard
            title='AutoMod Plus'
            description='Discordトークンや自身のサーバー以外の招待リンクなど、特定の条件を満たすメッセージを自動で削除します。'
            href={`${links.docs}/features/automod-plus/`}
            icon='solar:sledgehammer-bold'
          />
          <FeatureCard
            title='/timeout'
            description='指定したユーザーを最大で28日タイムアウトすることができます。（Discordの標準機能では最大7日）'
            href={`${links.docs}/features/timeout`}
            icon='solar:slash-square-bold'
          />
          <FeatureCard
            title='/embed'
            description='埋め込みを送信したり、送信した埋め込みにロールを付与するボタンやセレクトメニューを追加することができます。'
            href={`${links.docs}/features/embed`}
            icon='solar:slash-square-bold'
          />
          <FeatureCard
            title='/verify'
            description='特定の認証（ボタン押下・画像認証）を行った際に、設定したロールを付与するメッセージを送信します。'
            href={`${links.docs}/features/verify`}
            icon='solar:slash-square-bold'
          />
          <FeatureCard
            title='/firstmessage'
            description='コマンドを実行したチャンネルの一番最初のメッセージへ移動できるURLボタンを送信します。 '
            href={`${links.docs}/features/firstmessage`}
            icon='solar:slash-square-bold'
          />
        </div>
      </div>
    </div>
  );
}

// #region Components
type FeatureProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
} & HTMLAttributes<HTMLElement>;

function Feature({ className, title, description, href, imageSrc, ...props }: FeatureProps) {
  return (
    <section
      className={cn(
        'w-full max-w-6xl flex flex-col gap-6 items-center md:gap-12 md:flex-row md:justify-between',
        className,
      )}
      {...props}
    >
      <div className='flex-1 flex flex-col gap-4'>
        <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight'>{title}</h1>
        <p className='text-default-600 tracking-tighter text-sm md:text-base'>{description}</p>
        <Button
          as={Link}
          href={href}
          className='md:mr-auto'
          color='primary'
          startContent={<Icon icon='solar:arrow-right-linear' className='text-[24px]' />}
        >
          もっと見る
        </Button>
      </div>
      <Image
        className='rounded-medium shadow-md md:max-w-lg pointer-events-none'
        src={imageSrc}
        alt={`${title}のイメージ画像`}
        width={1280}
        height={720}
      />
    </section>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
} & CardProps;

function FeatureCard({ icon, title, description, className, ...props }: FeatureCardProps) {
  return (
    <Card
      as={NextLink}
      className={cn('flex flex-col gap-3 col-span-12 sm:col-span-6 md:col-span-3 p-6', className)}
      isHoverable
      isPressable
      {...props}
    >
      <div className='flex items-center justify-center p-2 rounded-medium bg-primary-100 mr-auto'>
        <Icon icon={icon} className='text-[28px] text-primary-500' />
      </div>
      <div className='flex flex-col gap-2 sm:gap-3'>
        <h5 className='font-bold text-lg'>{title}</h5>
        <p className='text-sm tracking-tight'>{description}</p>
      </div>
    </Card>
  );
}
// #endregion
