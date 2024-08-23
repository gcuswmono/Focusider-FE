'use client';

import { useEffect, useState } from 'react';
import QuizHeaderModule from '@/app/_components/common/modules/QuizHeaderModule';
import QuizContentAtom from '@/app/_components/common/atoms/QuizContentAtom';
import QuizOptionModule from '@/app/_components/common/modules/QuizOptionModule';
import { useGetQuizQuery } from '@/app/_api/quiz/useGetQuizQuery';
import { usePostQuizMutation } from '@/app/_api/quiz/usePostQuizMutation';
import Image from 'next/image';
import { ClockIcon } from '@/app/_assets/icons';

const QuizPage = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState<number>(0); // 퀴즈 푼 시간 기록
  const { data, isLoading, isError } = useGetQuizQuery();

  const { mutate: postQuiz } = usePostQuizMutation({
    successCallback: () => {
      console.log('정답이 성공적으로 전송되었습니다.');
    },
    errorCallback: (error) => {
      console.error('정답 전송 실패:', error);
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1); // 매 초마다 1씩 증가
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
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
      console.log('옵션을 선택해주세요.');
    }
  };

  // 타이머를 00:00 형식으로 변환하는 함수
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0'); // 분을 두 자리로 맞춤
    const secs = (seconds % 60).toString().padStart(2, '0'); // 초를 두 자리로 맞춤
    return `${minutes}:${secs}`;
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
          <div className="pt-6">
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white"
              onClick={handleNextButtonClick}
            >
              다음
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuizPage;
