'use client';

import QuizInfoContainer from '@/app/_components/quiz/QuizInfoContainer';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ClapIcon } from '@/app/_assets/icons';

interface UserinfoPageComponentsProps {
  slug: string;
}

const SignUpContainer = ({ slug }: UserinfoPageComponentsProps) => {
  const pageNum = slug[0];
  const router = useRouter();

  switch (pageNum) {
    case '1':
      return <QuizInfoContainer pageNum={pageNum} />;
    case '2':
      return <QuizInfoContainer pageNum={pageNum} />;
    case '3':
      return <QuizInfoContainer pageNum={pageNum} />;
    default:
      return (
        <div className="flex h-dvh grow flex-col items-center justify-center gap-y-6">
          <Image src={ClapIcon} alt="done" />
          <div className="flex flex-col gap-y-3">
            <p className="text-h3 font-semibold">오늘의 단어 퀴즈 완료</p>
            <p className="whitespace-pre-line text-center">
              틀린 문제는 오답노트를 통해 <br />
              다시 풀어볼 수 있어요 !
            </p>
          </div>
          <ButtonAtom
            onClick={() => router.push('/home')}
            buttonStyle="dark"
            text="확인"
            type="button"
            width="350px"
            height="45px"
            rounded="full"
          />
        </div>
      );
  }
};

export default SignUpContainer;
