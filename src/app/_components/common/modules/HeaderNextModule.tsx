'use client';

import { useRouter } from 'next/navigation';
import logo from '@/app/_assets/images/img_1.png';
import IconAtom from '@/app/_components/common/atoms/IconAtom';
import { NextArrowIcon } from '@/app/_assets/icons';

interface HeaderNextModuleProps {
  onClick: () => void;
}

const HeaderNextModule = ({ onClick }: HeaderNextModuleProps) => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between border-b border-stroke-100 bg-primary-100 px-[54px] py-3.5 xl:max-w-[1280px]">
      <div
        role="presentation"
        className="flex items-center justify-between"
        onClick={() => router.push('/home')}
      >
        <IconAtom
          className="cursor-pointer object-contain"
          src={logo.src}
          alt="logo"
          width={160}
          height={40}
        />
      </div>
      <div role="presentation" className="flex items-center justify-between" onClick={onClick}>
        <IconAtom src={NextArrowIcon} alt="next" />
      </div>
    </div>
  );
};

export default HeaderNextModule;
