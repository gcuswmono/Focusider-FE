'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/app/_components/common/atoms/ProgressBar';

interface ThirdQuestionPageProps {
  currentQuestion: number;
  totalQuestions: number;
  pageNum: string;
}

const ThirdQuestionPage = ({
  currentQuestion,
  totalQuestions,
  pageNum,
}: ThirdQuestionPageProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();

  // Handle option click
  const handleOptionClick = (option: string) => {
    setSelectedOptions((prev) => {
      // Check if option is already selected
      if (prev.includes(option)) {
        // Remove the option if already selected
        return prev.filter((opt) => opt !== option);
      }
      // Add the option if not selected
      if (prev.length < 3) {
        return [...prev, option];
      }
      return prev;
    });
  };

  const handleNext = () => {
    // Check if at least one option is selected
    if (selectedOptions.length > 0 && selectedOptions.length <= 3) {
      // 서버에 답변 저장
      router.push(`/signup/${parseInt(pageNum, 10) + 1}`);
    }
  };

  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center bg-primary-100">
      <div className="w-full px-20 py-5">
        <ProgressBar currentStep={currentQuestion + 1} totalSteps={totalQuestions} />
      </div>
      <div className="flex h-dvh w-[460px] flex-col items-center justify-center gap-y-6">
        <div className="mb-3 flex w-full flex-col">
          <h1 className="mb-1 w-full text-h3 font-bold">
            다음 중 관심 있는 주제를 <br />
            선택해주세요.
          </h1>
          <p className="text-4 text-sub-200">최대 3개까지 선택할 수 있습니다.</p>
        </div>
        <div className="flex w-full flex-wrap gap-x-2 gap-y-4">
          {[
            '역사',
            '스포츠',
            '과학',
            '경제',
            '코딩',
            '예술',
            '인물',
            '추리',
            '음악',
            '언어',
            '환경',
            '우주',
            '로봇',
            '친구',
            '만화',
          ].map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`rounded-full px-8 py-3 text-center ${
                selectedOptions.includes(option)
                  ? 'border border-primary/70 bg-primary/30 text-primary'
                  : 'border border-primary/70 bg-[#E1DDF1] text-primary'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={selectedOptions.length === 0 || selectedOptions.length > 3}
          className={`mt-4 h-14 w-full rounded bg-primary p-2 font-semibold text-white ${selectedOptions.length === 0 || selectedOptions.length > 3 ? 'cursor-not-allowed' : ''}`}
        >
          다음
        </button>
      </div>
    </section>
  );
};

export default ThirdQuestionPage;
