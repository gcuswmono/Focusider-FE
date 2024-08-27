import type { Metadata } from 'next';
import { Gowun_Dodum, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import PageContainer from '@/app/_components/layout/PageContainer';
import QueryProvider from '@/app/_api/QueryProvider';

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });
const gowunDodum = Gowun_Dodum({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--gowun',
});

export const metadata: Metadata = {
  title: 'Focusider',
  icons: [
    {
      url: '/images/favicon.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${notoSansKR.className} ${gowunDodum.variable}`}>
      <link rel="icon" href="/images/favicon.svg" sizes="any" />
      <body>
        <QueryProvider>
          <PageContainer>{children}</PageContainer>
        </QueryProvider>
      </body>
    </html>
  );
}
