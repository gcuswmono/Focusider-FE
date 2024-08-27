'use client';

import { useRouter } from 'next/navigation';
import IconAtom from '@/app/_components/common/atoms/IconAtom';
import { AppLogoIcon, LogoIcon, NextArrowIcon } from '@/app/_assets/icons';
import Image from 'next/image';
import React from 'react';

interface HeaderNextModuleProps {
  onClick: () => void;
}

const HeaderNextModule = ({ onClick }: HeaderNextModuleProps) => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between border-b border-stroke-100 bg-primary-100 px-[54px] py-3.5 xl:max-w-[1280px]">
      <div role="presentation" className="flex items-center" onClick={() => router.push('/home')}>
        <Image src={AppLogoIcon} alt="focusider" className="h-9 w-9" />
        <Image src={LogoIcon} alt="focusider" className="-ml-3.5 h-10" />
      </div>
      <div role="presentation" className="flex items-center justify-between" onClick={onClick}>
        <IconAtom src={NextArrowIcon} alt="next" />
      </div>
    </div>
  );
};

export default HeaderNextModule;
