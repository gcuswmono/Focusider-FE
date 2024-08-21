'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/app/_components/common/atoms/ProgressBar';
import useCategory from '@/app/_components/signup/CategoryContext';

interface SecondQuestionPageProps {
  currentQuestion: number;
  totalQuestions: number;
  pageNum: string;
}

const SecondQuestionPage = ({
  currentQuestion,
  totalQuestions,
  pageNum,
}: SecondQuestionPageProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();
  const { req, setReq } = useCategory();

  const mapLabelToOption = (label: string) => {
    switch (label) {
      case '자주 있어요.':
        return 'OFTEN';
      case '가끔 있어요.':
        return 'SOMETIMES';
      case '거의 없어요.':
        return 'ALMOST_NONE';
      case '전혀 없어요.':
        return 'NOTHING';
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (selectedOption) {
      req.readingHardType = mapLabelToOption(selectedOption);
      console.log(req);
      router.push(`/signup/${parseInt(pageNum, 10) + 1}`);
    }
  };

  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center bg-primary-100">
      <div className="w-full px-20 py-5">
        <ProgressBar currentStep={currentQuestion + 1} totalSteps={totalQuestions} />
      </div>
      <div className="flex h-dvh w-[460px] flex-col items-center justify-center gap-y-6">
        <h1 className="mb-3 w-full text-h3 font-bold">
          책을 읽을 때 모르는 단어가 있어서
          <br />
          어려웠던 적이 있나요?
        </h1>
        <div className="w-full">
          {['자주 있어요.', '가끔 있어요.', '거의 없어요.', '전혀 없어요.'].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`mb-6 w-full rounded border py-7 pl-8 text-left ${
                selectedOption === option
                  ? 'border-primary/70 bg-primary/30 text-primary'
                  : 'bg-[#E1DDF1]'
              }`}
            >
              {option}
            </button>
          ))}
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

export default SecondQuestionPage;
