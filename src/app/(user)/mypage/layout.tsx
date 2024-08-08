import type { Metadata } from 'next';
import { StrictPropsWithChildren } from '@/type';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';
import HeaderModule from '@/app/_components/common/modules/HeaderModule';

export const metadata: Metadata = {
  title: '마이페이지',
  description: '마이페이지',
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
