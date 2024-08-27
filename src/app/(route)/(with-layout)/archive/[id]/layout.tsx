'use client';

import React, { ReactNode } from 'react';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';
import HeaderNextModule from '@/app/_components/common/modules/HeaderNextModule';
import { useRouter } from 'next/navigation';

interface Props {
  children: ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col">
      <HeaderNextModule onClick={() => router.push('/archive')} />
      <main className="flex-grow">{children}</main>
      <NavBarContainer />
    </div>
  );
};

export default CommonLayout;
