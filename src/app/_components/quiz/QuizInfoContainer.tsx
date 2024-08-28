'use client';

import React, { useEffect, useState } from 'react';
import QuizHeaderModule from '@/app/_components/common/modules/QuizHeaderModule';
import QuizContentAtom from '@/app/_components/common/atoms/QuizContentAtom';
import QuizOptionModule from '@/app/_components/common/modules/QuizOptionModule';
import QuizAnswerModule from '@/app/_components/common/modules/QuizAnswerModule'; // 정답 모듈 임포트
import { useGetQuizQuery } from '@/app/_api/quiz/useGetQuizQuery';
import { usePostQuizMutation } from '@/app/_api/quiz/usePostQuizMutation';
import Image from 'next/image';
import { ClockIcon } from '@/app/_assets/icons';
import HeaderNextModule from '@/app/_components/common/modules/HeaderNextModule';
import { useRouter } from 'next/navigation';
import Loading from '@/app/_components/common/atoms/Loading';

interface QuizContainerProps {
  pageNum: string;
}

const QuizInfoContainer = ({ pageNum }: QuizContainerProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [quizResult, setQuizResult] = useState<null | {
    correctContent: string;
    chooseContent: string;
    commentaryContent: string;
  }>(null);

  const { data, isLoading, refetch } = useGetQuizQuery();
  const router = useRouter();

  const { mutate: postQuiz } = usePostQuizMutation({
    successCallback: (response) => {
      setQuizResult(response.data);
      refetch();
    },
    errorCallback: (error) => {
      console.error('정답 전송 실패:', error);
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (id: number) => {
    setSelectedOption(id);
  };

  const handleNextButtonClick = () => {
    if (selectedOption !== null && data) {
      postQuiz({
        quizId: data.quizId,
        choiceId: selectedOption,
        time: timeSpent,
      });
    } else {
      alert('옵션을 선택해주세요.');
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <div className="w-[1280px]">
      {!quizResult ? (
        <div className="">
          <HeaderNextModule onClick={handleNextButtonClick} />
          {!data ? (
            isLoading ? (
              <Loading />
            ) : (
              <p>error</p>
            )
          ) : (
            <div className="flex-grow px-14 py-10">
              <div className="flex items-center justify-end gap-x-2">
                <Image src={ClockIcon} alt="time" />
                <p className="text-h4 font-semibold text-sub-300">{formatTime(timeSpent)}</p>
              </div>
              <div className="-mt-10">
                <QuizHeaderModule number={data.quizId} title={data.title} />
              </div>
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
        </div>
      ) : (
        <>
          <HeaderNextModule onClick={() => router.push(`/quiz/${parseInt(pageNum, 10) + 1}`)} />
          <section className="flex h-full w-full items-center justify-center">
            <div className="h-full w-full rounded-lg p-10">
              <QuizAnswerModule
                isCorrect={quizResult.correctContent === quizResult.chooseContent}
              />
              <div className="p-2">
                <div className="my-4 flex flex-col gap-y-3.5">
                  <p className="text-1 font-semibold text-sub-300">정답</p>
                  <p className="text-2">{quizResult.correctContent}</p>
                </div>
                <div className="my-4 flex flex-col gap-y-3.5">
                  <p className="text-1 font-semibold text-sub-300">내가 선택한 답</p>
                  <p className="text-2">{quizResult.chooseContent}</p>
                </div>
                <div className="my-4 flex flex-col gap-y-3.5">
                  <p className="text-1 font-semibold text-sub-300">해설</p>
                  <p className="text-2">{quizResult.commentaryContent}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default QuizInfoContainer;
