'use client';

import React, { ReactNode } from 'react';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';
import HeaderNextModule from '@/app/_components/common/modules/HeaderNextModule';

interface Props {
  children: ReactNode;
  onClick?: () => void; // onClick prop 추가
}

const NestedPageLayout = ({ children, onClick }: Props) => {
  return (
    <div className="flex h-screen flex-col">
      <HeaderNextModule onClick={() => onClick} />
      <main className="flex-grow">{children}</main>
      <NavBarContainer />
    </div>
  );
};

export default NestedPageLayout;
