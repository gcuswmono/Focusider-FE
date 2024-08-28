'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/app/_components/common/atoms/ProgressBar';
import useCategory from '@/app/_components/signup/CategoryContext';

interface FirstQuestionPageProps {
  currentQuestion: number;
  totalQuestions: number;
  pageNum: string;
}

const FirstQuestionPage = ({
  currentQuestion,
  totalQuestions,
  pageNum,
}: FirstQuestionPageProps) => {
  const [selectedOption, setSelectedOption] = useState<typeof req.readingTermType | null>(null);
  const router = useRouter();
  const { req } = useCategory();
  const handleNext = () => {
    if (selectedOption) {
      req.readingTermType = selectedOption;
      console.log(req);
      router.push(`/signup/${parseInt(pageNum, 10) + 1}`);
    }
  };

  const mapLabelToOption = (label: string) => {
    switch (label) {
      case '매일 읽어요.':
        return 'EVERYDAY';
      case '일주일에 1-2회 정도 읽어요.':
        return 'ONCE_A_WEEK';
      case '아주 가끔 읽어요.':
        return 'SOMETIMES';
      case '거의 읽지 않아요.':
        return 'ALMOST_NONE';
      default:
        return null;
    }
  };

  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center bg-primary-100">
      <div className="w-full px-20 py-5">
        <ProgressBar currentStep={currentQuestion + 1} totalSteps={totalQuestions} />
      </div>
      <div className="flex h-dvh w-[460px] flex-col items-center justify-center gap-y-6">
        <h1 className="mb-3 w-full text-h3 font-bold">평소에 책을 얼마나 자주 읽나요?</h1>
        <div className="w-full">
          {[
            '매일 읽어요.',
            '일주일에 1-2회 정도 읽어요.',
            '아주 가끔 읽어요.',
            '거의 읽지 않아요.',
          ].map((option) => {
            const mappedOption = mapLabelToOption(option);
            return (
              <button
                key={option}
                onClick={() => setSelectedOption(mappedOption)}
                className={`mb-6 w-full rounded border py-7 pl-8 text-left ${
                  selectedOption === mappedOption
                    ? 'border-primary/70 bg-primary/30 text-primary'
                    : 'bg-[#E1DDF1]'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`h-14 w-full rounded bg-primary p-2 font-semibold text-white ${
            !selectedOption ? 'cursor-not-allowed' : ''
          }`}
        >
          다음
        </button>
      </div>
    </section>
  );
};

export default FirstQuestionPage;
