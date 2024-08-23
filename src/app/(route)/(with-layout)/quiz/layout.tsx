'use client';

import React, { ReactNode } from 'react';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';

interface Props {
  children: ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-grow">{children}</main>
      <NavBarContainer />
    </div>
  );
};

export default CommonLayout;
