'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';
import HeaderModule from '@/app/_components/common/modules/HeaderModule';

interface Props {
  children: ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  const pathname = usePathname();

  const isNestedRoute = pathname.split('/').length > 2;
  const isQuizRoute = pathname === '/quiz';

  if (isNestedRoute || isQuizRoute) {
    return (
      <div className="flex h-screen flex-col">
        <main className="flex-grow">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <HeaderModule />
      <main className="flex-grow">{children}</main>
      <NavBarContainer />
    </div>
  );
};

export default CommonLayout;
