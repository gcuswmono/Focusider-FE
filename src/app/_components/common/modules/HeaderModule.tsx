'use client';

import { useRouter } from 'next/navigation';
import logo from '@/app/_assets/images/img_1.png';
import IconAtom from '@/app/_components/common/atoms/IconAtom';
import { LogoutIcon } from '@/app/_assets/icons';

const HeaderModule = () => {
  const router = useRouter();
  return (
    <div className="flex h-[174px] items-center justify-between border-b border-stroke-100 px-[54px] py-3.5">
      <div
        role="presentation"
        className="flex items-center justify-between"
        onClick={() => router.push('/')}
      >
        <IconAtom
          className="cursor-pointer object-contain"
          src={logo.src}
          alt="logo"
          width={300}
          height={80}
        />
      </div>
      <div
        role="presentation"
        className="flex items-center justify-between"
        onClick={() => router.push('/')} // 로그아웃 로직으로 수정 필요
      >
        <IconAtom src={LogoutIcon.src} alt="logout" width={54} height={54} />
      </div>
    </div>
  );
};

export default HeaderModule;
