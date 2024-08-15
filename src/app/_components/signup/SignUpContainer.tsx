'use client';

import CreateAccountForm from '@/app/_components/signup/CreateAccountForm';
import UserProfileForm from '@/app/_components/signup/UserProfileForm';
import PersonalizationSettings from '@/app/_components/signup/PersonalizationSettings';
import FirstQuestionPage from '@/app/_components/signup/FirstQuestion';
import SecondQuestionPage from '@/app/_components/signup/SecondQuestion';
import ThirdQuestionPage from '@/app/_components/signup/ThirdQuestion';
import CompletionPage from '@/app/_components/signup/CompletionPage';

interface UserinfoPageComponentsProps {
  slug: string;
}

const SignUpContainer = ({ slug }: UserinfoPageComponentsProps) => {
  const pageNum = slug[0];
  switch (pageNum) {
    case '1':
      return <CreateAccountForm pageNum={pageNum} />;
    case '2':
      return <UserProfileForm pageNum={pageNum} />;
    case '3':
      return <PersonalizationSettings pageNum={pageNum} />;
    case '4':
      return <FirstQuestionPage currentQuestion={0} totalQuestions={3} pageNum={pageNum} />;
    case '5':
      return <SecondQuestionPage currentQuestion={1} totalQuestions={3} pageNum={pageNum} />;
    case '6':
      return <ThirdQuestionPage currentQuestion={2} totalQuestions={3} pageNum={pageNum} />;
    case '7':
      return <CompletionPage />;
    default:
      return '';
  }
};

export default SignUpContainer;
