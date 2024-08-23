import React from 'react';
import IconAtom from '@/app/_components/common/atoms/IconAtom';
import QuizAnswerTextAtom from '@/app/_components/common/atoms/QuizAnswerTextAtom';
import { CheckCircleIcon, XCircleIcon } from '@/app/_assets/icons';

interface QuizAnswerModuleProps {
  isCorrect: boolean;
}

const QuizAnswerModule = ({ isCorrect }: QuizAnswerModuleProps) => {
  return (
    <div
      className={`flex w-full items-center space-x-5 rounded-lg py-3 pl-4 ${
        isCorrect ? 'bg-positive/20' : 'bg-negative/20'
      }`}
    >
      <IconAtom
        src={isCorrect ? CheckCircleIcon : XCircleIcon}
        alt={isCorrect ? 'Correct' : 'Incorrect'}
      />
      <QuizAnswerTextAtom
        text={isCorrect ? '정답이에요' : '오답이에요'}
        className={isCorrect ? 'text-positive' : 'text-negative'}
      />
    </div>
  );
};

export default QuizAnswerModule;
