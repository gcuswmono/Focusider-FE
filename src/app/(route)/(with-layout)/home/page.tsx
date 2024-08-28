'use client';

import React, { useEffect, useState } from 'react';
import CardContainer from '@/app/_components/common/containers/CardContainer';
import ArticleCoverModule from '@/app/_components/common/modules/ArticleCoverModule';
import { ArticleKeywordType, ArticleKeywordTypeConverter } from '@/app/_types/converter';
import Image from 'next/image';
import {
  AmalgamationCoverIcon,
  AmalgamationIcon,
  ArtCoverIcon,
  ArtIcon,
  CalendarIcon,
  EmptyProfileIcon,
  HumanitiesCoverIcon,
  HumanitiesIcon,
  QuizCoverIcon,
  ReportCoverIcon,
  ScienceCoverIcon,
  ScienceIcon,
  SocietyCoverIcon,
  SocietyIcon,
  TechnologyCoverIcon,
  TechnologyIcon,
} from '@/app/_assets/icons';
import InfoModule from '@/app/_components/common/modules/InfoModule';
import { useRouter } from 'next/navigation';
import { useGetArticleQuery } from '@/app/_api/article/useGetArticleQuery';
import Loading from '@/app/_components/common/atoms/Loading';
import { useGetMemberInfoQuery } from '@/app/_api/member/useGetMemberInfoQuery';
import { App as CapacitorApp } from '@capacitor/app';
import ExitModal from '@/app/_components/common/ExitModal'; // Modal UI 컴포넌트 import

export default function Login() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState('');
  const [showExitModal, setShowExitModal] = useState(false); // 모달을 보여줄지 관리하는 상태
  const { data, isLoading, isError } = useGetArticleQuery();
  const { data: MemberInfo } = useGetMemberInfoQuery();

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${String(today.getMonth() + 1).padStart(2, '0')}월 ${String(today.getDate()).padStart(2, '0')}일`;
    setCurrentDate(formattedDate);
  }, []);

  // Capacitor의 backButton 이벤트 리스너 추가
  useEffect(() => {
    const handleBackButton = async () => {
      const backButtonListener = await CapacitorApp.addListener('backButton', () => {
        // 모달을 열어 "정말 종료하시겠습니까?" 메시지를 보여줍니다.
        setShowExitModal(true);
      });

      return () => {
        backButtonListener.remove();
      };
    };

    handleBackButton();
  }, []);

  if (isLoading) return <Loading />;
  if (isError || !data) return <p>error</p>;

  const getCategoryIcon = (categoryType: ArticleKeywordType) => {
    switch (categoryType) {
      case 'SCIENCE':
        return {
          infoModuleSrc: ScienceIcon,
          coverModuleSrc: ScienceCoverIcon,
        };
      case 'ART':
        return {
          infoModuleSrc: ArtIcon,
          coverModuleSrc: ArtCoverIcon,
        };
      case 'SOCIETY':
        return {
          infoModuleSrc: SocietyIcon,
          coverModuleSrc: SocietyCoverIcon,
        };
      case 'TECHNOLOGY':
        return {
          infoModuleSrc: TechnologyIcon,
          coverModuleSrc: TechnologyCoverIcon,
        };
      case 'HUMANITIES':
        return {
          infoModuleSrc: HumanitiesIcon,
          coverModuleSrc: HumanitiesCoverIcon,
        };
      case 'AMALGAMATION':
        return {
          infoModuleSrc: AmalgamationIcon,
          coverModuleSrc: AmalgamationCoverIcon,
        };
      default:
        return {
          infoModuleSrc: HumanitiesIcon,
          coverModuleSrc: HumanitiesCoverIcon,
        };
    }
  };

  const categoryIcons = getCategoryIcon(data.categoryType as ArticleKeywordType);

  return (
    <section className="flex h-full w-full items-center justify-center bg-primary-100">
      <div className="flex flex-col items-center justify-center gap-y-6 px-8">
        <div className="flex w-full justify-between">
          <div className="flex h-10 items-center gap-x-3">
            <Image
              src={MemberInfo?.profileImageUrl || EmptyProfileIcon}
              className="h-12 w-12 rounded-full object-cover"
              width={48}
              height={48}
              alt="profile"
            />
            <p className="text-h4 font-semibold">반가워요 ! {MemberInfo?.name}님</p>
          </div>
          <InfoModule text={currentDate} src={CalendarIcon} alt="calendar" />
        </div>
        <div className="grid w-full grid-cols-2 gap-x-5">
          <div className="col-span-1">
            <CardContainer
              onClick={() => router.push('/article')}
              size="large"
              title="오늘의 추천 아티클"
              subtitle="당신을 위한 맞춤 콘텐츠를 만나보세요."
              backgroundColor="bg-primary-300"
              titleColor="text-white"
              subtitleColor="text-stroke-100"
              infoModuleSrc={categoryIcons.infoModuleSrc}
              infoModuleAlt="icon"
              infoModuleText={ArticleKeywordTypeConverter[data.categoryType as ArticleKeywordType]}
            >
              <div className="mt-8 flex justify-end">
                <ArticleCoverModule
                  title={data.title}
                  src={categoryIcons.coverModuleSrc}
                  alt="cover"
                  bgColor="bg-[#EDF1FC]"
                />
              </div>
            </CardContainer>
          </div>
          <div className="col-span-1 grid grid-rows-2 gap-y-5">
            <CardContainer
              onClick={() => router.push('/report')}
              size="small"
              title="학습 리포트 보러가기"
              subtitle={'일주일 간의 성장을 확인하고\n다음 단계를 준비하세요.'}
              backgroundColor="bg-primary-200"
              titleColor="text-black"
              subtitleColor="text-[#696969]"
            >
              <div className="-mt-20 flex justify-end">
                <Image src={ReportCoverIcon} alt="cover" />
              </div>
            </CardContainer>

            <CardContainer
              onClick={() => router.push('/quiz/1')}
              size="small"
              title="오늘의 단어 퀴즈"
              subtitle={'일주일 간의 성장을 확인하고\n다음 단계를 준비하세요.'}
              backgroundColor="bg-primary"
              titleColor="text-white"
              subtitleColor="text-stroke-100"
            >
              <div className="-mt-14 flex justify-end">
                <Image src={QuizCoverIcon} alt="cover" />
              </div>
            </CardContainer>
          </div>
        </div>
      </div>

      {/* 모달을 띄우는 부분 */}
      {showExitModal && (
        <ExitModal
          onConfirm={() => CapacitorApp.exitApp()} // 종료 확인 버튼
          onCancel={() => setShowExitModal(false)} // 취소 버튼
          open={false}
        />
      )}
    </section>
  );
}
