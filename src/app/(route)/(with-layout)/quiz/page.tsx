'use client';

import { useState } from 'react';
import QuizHeaderModule from '@/app/_components/common/modules/QuizHeaderModule';
import QuizContentAtom from '@/app/_components/common/atoms/QuizContentAtom';
import QuizOptionModule from '@/app/_components/common/modules/QuizOptionModule';
import { useGetQuizQuery } from '@/app/_api/quiz/useGetQuizQuery';

const QuizPage = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const { data, isLoading, isError } = useGetQuizQuery();

  const handleOptionClick = (id: number) => {
    setSelectedOption(id);
    console.log(`선택된 옵션 ID: ${id}`);
  };

  return (
    <section className="flex h-full flex-col items-center justify-center">
      {!data ? (
        isLoading ? (
          <p>loading ..</p>
        ) : (
          <p>error</p>
        )
      ) : (
        <div className="h-full w-full px-14 py-10">
          <QuizHeaderModule number={data.quizId} title={data.title} />
          <div className="px-8 py-6">
            <QuizContentAtom>
              <p>{data.content}</p>
            </QuizContentAtom>
          </div>
          <div className="px-12 pt-6">
            {data.choiceContent.map((option: { id: number; content: string }) => (
              <QuizOptionModule
                key={option.id}
                text={option.content}
                isChecked={selectedOption === option.id}
                onClick={() => handleOptionClick(option.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default QuizPage;
