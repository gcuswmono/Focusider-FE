'use client';

import { usePathname, useRouter } from 'next/navigation';
import NavItemModule from '@/app/_components/common/modules/NavItemModule';
import {
  ArchiveGrayIcon,
  ArchivePrimaryIcon,
  HomeGrayIcon,
  HomePrimaryIcon,
  PencilGrayIcon,
  PencilPrimaryIcon,
  PersonGrayIcon,
  PersonPrimaryIcon,
} from '@/app/_assets/icons';

const NAV_ITEMS = [
  {
    path: '/home',
    iconSrcActive: HomePrimaryIcon,
    iconSrcInactive: HomeGrayIcon,
    iconAlt: 'Home',
    text: '학습하기',
  },
  {
    path: '/archive',
    iconSrcActive: ArchivePrimaryIcon,
    iconSrcInactive: ArchiveGrayIcon,
    iconAlt: 'Archive',
    text: '모아보기',
  },
  {
    path: '/review',
    iconSrcActive: PencilPrimaryIcon,
    iconSrcInactive: PencilGrayIcon,
    iconAlt: 'Pencil',
    text: '오답노트',
  },
  {
    path: '/mypage',
    iconSrcActive: PersonPrimaryIcon,
    iconSrcInactive: PersonGrayIcon,
    iconAlt: 'Person',
    text: '마이페이지',
  },
];

const NavBarContainer = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="border-t border-stroke-100 bg-primary-100">
      <div className="flex w-full justify-between px-52 py-7">
        {NAV_ITEMS.map((item) => (
          <NavItemModule
            key={item.path}
            iconSrcActive={item.iconSrcActive}
            iconSrcInactive={item.iconSrcInactive}
            iconAlt={item.iconAlt}
            text={item.text}
            isActive={pathname.includes(item.path)}
            onClick={() => router.push(item.path)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBarContainer;
