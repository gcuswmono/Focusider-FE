'use client';

import { useRouter } from 'next/navigation';
import logo from '@/app/_assets/images/img_1.png';
import IconAtom from '@/app/_components/common/atoms/IconAtom';
import { LogoutIcon } from '@/app/_assets/icons';
import { useLogoutMutation } from '@/app/_api/auth/useLogoutMutation';

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
