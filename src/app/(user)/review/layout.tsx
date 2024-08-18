import type { Metadata } from 'next';
import { StrictPropsWithChildren } from '@/type';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';
import HeaderModule from '@/app/_components/common/modules/HeaderModule';

export const metadata: Metadata = {
  title: '오답노트',
  description: '오답노트',
};

export default function layout({ children }: StrictPropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderModule />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <NavBarContainer />
    </main>
  );
}
