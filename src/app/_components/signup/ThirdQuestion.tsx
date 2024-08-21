'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/app/_components/common/atoms/ProgressBar';
import useCategory, { Category } from '@/app/_components/signup/CategoryContext';
import { add } from '@/api/auth/api';
import { AddRequestBody } from '@/api/auth/types';

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
  const [selectedOptions, setSelectedOptions] = useState<Category[]>([]);
  const router = useRouter();
  const { req, setReq } = useCategory();

  const mapLabelToOption = (label: string): Category | null => {
    switch (label) {
      case '예술':
        return 'ART';
      case '과학':
        return 'SCIENCE';
      case '사회':
        return 'SOCIETY';
      case '기술':
        return 'TECHNOLOGY';
      case '인문학':
        return 'HUMANITIES';
      case '융합':
        return 'AMALGAMATION';
      default:
        return null;
    }
  };

  const handleOptionClick = (label: string) => {
    const option = mapLabelToOption(label);
    if (option) {
      let updatedOptions: Category[] = [];

      // 기존의 selectedOptions 배열을 참조하여 새로운 배열을 만듭니다.
      if (selectedOptions.includes(option)) {
        updatedOptions = selectedOptions.filter((opt) => opt !== option);
      } else if (selectedOptions.length < 3) {
        updatedOptions = [...selectedOptions, option];
      } else {
        updatedOptions = selectedOptions; // 변경 없이 그대로 유지
      }

      // selectedOptions 상태를 업데이트
      setSelectedOptions(updatedOptions);

      // req.categoryTypes에 updatedOptions 배열을 저장
      setReq((prevReq) => ({
        ...prevReq,
        categoryTypes: updatedOptions,
      }));
    }
  };

  const handleNext = () => {
    if (selectedOptions.length === 3) {
      req.categoryTypes = selectedOptions;
      console.log(req);
      add(req);
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
          {['예술', '과학', '사회', '기술', '인문학', '융합'].map((label) => (
            <button
              key={label}
              onClick={() => handleOptionClick(label)}
              className={`rounded-full px-8 py-3 text-center ${
                selectedOptions.includes(mapLabelToOption(label)!)
                  ? 'border border-primary/70 bg-primary/30 text-primary'
                  : 'border border-primary/70 bg-[#E1DDF1] text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={selectedOptions.length === 0}
          className={`mt-4 h-14 w-full rounded bg-primary p-2 font-semibold text-white ${
            selectedOptions.length === 0 ? 'cursor-not-allowed' : ''
          }`}
        >
          다음
        </button>
      </div>
    </section>
  );
};

export default ThirdQuestionPage;
