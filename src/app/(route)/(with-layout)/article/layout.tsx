'use client';

import React, { ReactNode, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NavBarContainer from '@/app/_components/common/containers/NavBarContainer';
import HeaderNextModule from '@/app/_components/common/modules/HeaderNextModule';
import ModalModule from '@/app/_components/common/modules/ModalModule';
import { ClapIcon } from '@/app/_assets/icons';

interface Props {
  children: ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const isNestedRoute = pathname.split('/').length > 2;
  const isQuizRoute = pathname === '/quiz';

  if (isNestedRoute || isQuizRoute) {
    return (
      <div className="flex h-screen flex-col">
        <main className="flex-grow">{children}</main>
      </div>
    );
  }

  const handleNextButtonClick = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      router.push('/article/chat');
    }, 3000); // 3초 후에 라우팅
  };

  return (
    <div className="flex h-screen flex-col">
      <HeaderNextModule onClick={handleNextButtonClick} />
      <main className="flex-grow">{children}</main>
      <NavBarContainer />
      {showModal && (
        <ModalModule
          iconSrc={ClapIcon}
          iconAlt="Icon"
          title={'읽기가 끝났습니다! \n이제 여러분의 생각을 나눠보세요'}
        />
      )}
    </div>
  );
};

export default CommonLayout;
