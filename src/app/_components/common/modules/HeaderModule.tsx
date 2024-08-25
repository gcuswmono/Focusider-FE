'use client';

import { useRouter } from 'next/navigation';
import IconAtom from '@/app/_components/common/atoms/IconAtom';
import { AppLogoIcon, LogoIcon, LogoutIcon } from '@/app/_assets/icons';
import { useLogoutMutation } from '@/app/_api/auth/useLogoutMutation';
import Image from 'next/image';
import React from 'react';

const HeaderModule = () => {
  const router = useRouter();

  const { mutate: logout } = useLogoutMutation({
    successCallback: () => {
      router.push('/');
    },
    errorCallback: (error) => {
      console.error('로그아웃 실패:', error);
    },
  });

  return (
    <div className="flex items-center justify-between border-b border-stroke-100 bg-primary-100 px-[54px] py-3.5">
      <div role="presentation" className="flex items-center" onClick={() => router.push('/home')}>
        <Image src={AppLogoIcon} alt="focusider" className="h-9 w-9" />
        <Image src={LogoIcon} alt="focusider" className="-ml-3.5 h-10" />
      </div>
      <div
        role="presentation"
        className="flex items-center justify-between"
        onClick={() => logout()}
      >
        <IconAtom src={LogoutIcon.src} alt="logout" width={28} height={28} />
      </div>
    </div>
  );
};

export default HeaderModule;
