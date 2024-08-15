'use client';

import { useEffect, useState } from 'react';
import CardContainer from '@/app/_components/common/containers/CardContainer';
import ArticleCoverModule from '@/app/_components/common/modules/ArticleCoverModule';
import Image from 'next/image';
import {
  CalendarIcon,
  EmptyProfileIcon,
  QuizCoverIcon,
  ReportCoverIcon,
} from '@/app/_assets/icons';
import InfoModule from '@/app/_components/common/modules/InfoModule';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${String(today.getMonth() + 1).padStart(2, '0')}월 ${String(today.getDate()).padStart(2, '0')}일`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <section className="flex h-full w-full items-center justify-center bg-primary-100">
      <div className="flex flex-col items-center justify-center gap-y-6 px-8">
        <div className="flex w-full justify-between">
          <div className="flex h-10 items-center gap-x-3">
            <Image src={EmptyProfileIcon} className="h-12 w-12 rounded-full" alt="profile" />
            <p className="text-h4 font-semibold">반가워요 ! 김가현님</p>
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
            >
              <div className="mt-8 flex justify-end">
                <ArticleCoverModule
                  title={'심리 테스트가\n항상 맞는 이유는?'}
                  src={ReportCoverIcon}
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
              onClick={() => router.push('/quiz')}
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
    </section>
  );
}
