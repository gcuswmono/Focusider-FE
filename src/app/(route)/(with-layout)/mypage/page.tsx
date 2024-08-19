import SubtitleModule from '@/app/_components/common/modules/SubtitleModule';
import { AddProfileIcon, EmptyProfileIcon, MypageIcon } from '@/app/_assets/icons';
import Image from 'next/image';
import InfoSectionModule from '@/app/_components/common/modules/InfoSectionModule';

const MyPage = () => {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="w-[1080px]">
        <div className="">
          <SubtitleModule iconSrc={MypageIcon} iconAlt="archive" title="마이페이지" />

          <div className="w-full py-10 pl-16">
            <div className="relative inline-block">
              <Image src={EmptyProfileIcon} alt="profileDefault" />
              <button className="absolute -bottom-2 -right-2" type="button">
                <Image src={AddProfileIcon} alt="profileEdit" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 pl-16 pt-8">
            <InfoSectionModule title="이름" content="김가현" />
            <InfoSectionModule title="아이디" content="rrow2o" />
            <InfoSectionModule title="생년월일" content="2001.05.03" />
            <InfoSectionModule title="성별" content="여성" />
            <InfoSectionModule title="가입일" content="2024.08.19" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPage;
