'use client';

import SubtitleModule from '@/app/_components/common/modules/SubtitleModule';
import { AddProfileIcon, EmptyProfileIcon, MypageIcon } from '@/app/_assets/icons';
import Image from 'next/image';
import InfoSectionModule from '@/app/_components/common/modules/InfoSectionModule';
import { useGetMemberInfoQuery } from '@/app/_api/member/useGetMemberInfoQuery';
import Loading from '@/app/_components/common/atoms/Loading';
import React from 'react';
import { format } from 'date-fns';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom'; // 날짜 포맷팅을 위해 date-fns 사용

const MyPage = () => {
  const { data, isLoading, isError } = useGetMemberInfoQuery();

  if (isLoading) return <Loading />;
  if (isError || !data) return <p>error</p>;

  const formattedBirthDay = format(new Date(data.birthDay), 'yyyy.MM.dd');
  const formattedCreatedAt = format(new Date(data.createdAt), 'yyyy.MM.dd');

  const formattedGender = data.memberGenderType === 'FEMALE' ? '여성' : '남성';

  return (
    <section className="flex h-full items-center justify-center">
      <div className="w-[1080px]">
        <div className="">
          <SubtitleModule iconSrc={MypageIcon} iconAlt="archive" title="마이페이지" />

          <div className="w-full py-10 pl-16">
            <div className="relative inline-block">
              <Image
                src={data.profileImageUrl || EmptyProfileIcon}
                alt="profileDefault"
                width={100}
                height={100}
              />
              <button className="absolute -bottom-2 -right-2" type="button">
                <Image src={AddProfileIcon} alt="profileEdit" />
              </button>
            </div>
          </div>

          <div className="flex w-[330px] flex-col gap-y-6 pl-16 pt-8">
            <InfoSectionModule title="이름" content="김가현" />
            <InfoSectionModule title="아이디" content={data.accountId} />
            <InfoSectionModule title="생년월일" content={formattedBirthDay} />
            <InfoSectionModule title="성별" content={formattedGender} />
            <InfoSectionModule title="가입일" content={formattedCreatedAt} />
            <div className="mt-4 flex justify-end">
              <ButtonAtom
                buttonStyle="dark"
                text="수정"
                type="button"
                width="72px"
                height="34px"
                fontSize="14px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPage;
