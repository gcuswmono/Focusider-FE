'use client';

import SignupPage from '@/app/_components/signup/SignupForm';

interface UserinfoPageComponentsProps {
  slug: string;
}

const SignUpContainer = ({ slug }: UserinfoPageComponentsProps) => {
  const pageNum = slug[0];
  switch (pageNum) {
    case '1':
      return <SignupPage pageNum={pageNum} />;

    default:
      return '';
  }
};

export default SignUpContainer;
