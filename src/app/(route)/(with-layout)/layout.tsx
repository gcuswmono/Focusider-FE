import React, { ReactNode } from 'react';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';
import HeaderModule from '@/app/_components/common/modules/HeaderModule';

interface Props {
  children: ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col">
      <HeaderModule />
      <main className="flex-grow">{children}</main>
      <NavBarContainer />
    </div>
  );
};

export default CommonLayout;
