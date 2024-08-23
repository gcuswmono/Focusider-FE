'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default CommonLayout;
