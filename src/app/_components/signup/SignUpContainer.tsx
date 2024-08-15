'use client';

import CreateAccountForm from '@/app/_components/signup/CreateAccountForm';
import UserProfileForm from '@/app/_components/signup/UserProfileForm';
import PersonalizationSettings from '@/app/_components/signup/PersonalizationSettings';

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
    default:
      return '';
  }
};

export default SignUpContainer;
