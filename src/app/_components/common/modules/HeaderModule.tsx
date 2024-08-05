'use client';

import { useRouter } from 'next/navigation';
import logo from '@/app/_assets/images/img_1.png';
import IconAtom from '@/app/_components/common/atoms/IconAtom';
import { LogoutIcon } from '@/app/_assets/icons';

const HeaderModule = () => {
  const router = useRouter();
  return (
    <div className="flex h-16 items-center justify-between border-b border-stroke-100 px-6 py-3.5">
      <div
        role="presentation"
        className="flex items-center justify-between"
        onClick={() => router.push('/')}
      >
        <IconAtom className="h-full max-w-24 cursor-pointer object-contain" src={logo} alt="logo" />
      </div>
      <div
        role="presentation"
        className="flex items-center justify-between"
        onClick={() => router.push('/')} // 로그아웃 로직으로 수정 필요
      >
        <IconAtom className="h-full max-w-24" src={LogoutIcon} alt="logout" />
      </div>
    </div>
  );
};

export default HeaderModule;
