'use client';

import { useState } from 'react';
import QuizHeaderModule from '@/app/_components/common/modules/QuizHeaderModule';
import QuizContentAtom from '@/app/_components/common/atoms/QuizContentAtom';
import QuizOptionModule from '@/app/_components/common/modules/QuizOptionModule';

const quiz = {
  quizId: 1,
  title: '퀴즈 제목',
  content: '퀴즈 내용',
  choiceContent: [
    { id: 1, content: '선택지 1' },
    { id: 2, content: '선택지 2' },
    { id: 3, content: '선택지 3' },
    { id: 4, content: '선택지 4' },
  ],
};

const QuizPage = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (id: number) => {
    setSelectedOption(id);
    console.log(`선택된 옵션 ID: ${id}`);
  };

  return (
    <section className="flex h-full flex-col items-center justify-center">
      <div className="h-full w-full px-14 py-10">
        <QuizHeaderModule number={quiz.quizId} title={quiz.title} />
        <div className="px-8 py-6">
          <QuizContentAtom>
            <p className="">{quiz.content}</p>
          </QuizContentAtom>
        </div>
        <div className="px-12 pt-6">
          {quiz.choiceContent.map((option) => (
            <QuizOptionModule
              key={option.id}
              text={option.content}
              isChecked={selectedOption === option.id}
              onClick={() => handleOptionClick(option.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizPage;
