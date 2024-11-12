import '@/app/globals.css';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { Provider } from './provider';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'NoNICK.js',
    template: '%s - NoNICK.js',
  },
  metadataBase: new URL('https://nonick-js.com'),
  description: 'あなたのDiscordサーバーをもっと便利に。',
};

export const viewport: Viewport = {
  themeColor: '#0073f5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className={notoSansJP.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
