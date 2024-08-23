'use client';

import QuizInfoContainer from '@/app/_components/quiz/QuizInfoContainer';

interface UserinfoPageComponentsProps {
  slug: string;
}

const SignUpContainer = ({ slug }: UserinfoPageComponentsProps) => {
  const pageNum = slug[0];

  switch (pageNum) {
    case '1':
      return <QuizInfoContainer pageNum={pageNum} />;
    case '2':
      return <QuizInfoContainer pageNum={pageNum} />;
    case '3':
      return <QuizInfoContainer pageNum={pageNum} />;
    default:
      return <div>끝!!!</div>;
  }
};

export default SignUpContainer;
