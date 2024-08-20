import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

interface SignUpData {
  accountId: string;
  password: string;
  name: string;
  gender: string;
  birthday: string;
  profileImage: string;
}

interface SignUpErrors {
  accountId: string | null;
  password: string | null;
  name: string | null;
  gender: string | null;
  birthday: string | null;
  profileImage: string | null;
}

interface SignUpContextType {
  signUpData: SignUpData;
  signUpErrors: SignUpErrors;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpData>>;
  setSignUpErrors: React.Dispatch<React.SetStateAction<SignUpErrors>>;
}

const defaultValue: SignUpContextType = {
  signUpData: {
    accountId: '',
    password: '',
    name: '',
    gender: '',
    birthday: '',
    profileImage: '',
  },
  signUpErrors: {
    accountId: null,
    password: null,
    name: null,
    gender: null,
    birthday: null,
    profileImage: null,
  },
  setSignUpData: () => {},
  setSignUpErrors: () => {},
};

const SignUpContext = createContext<SignUpContextType>(defaultValue);

export default function useSignUp() {
  return useContext(SignUpContext);
}

interface Props {
  children: ReactNode;
}

export const SignUpProvider = ({ children }: Props) => {
  const [signUpData, setSignUpData] = useState<SignUpData>(defaultValue.signUpData);
  const [signUpErrors, setSignUpErrors] = useState<SignUpErrors>(defaultValue.signUpErrors);

  // useMemo로 Context 값을 메모이제이션하여 리렌더링 최적화
  const value = useMemo(
    () => ({ signUpData, setSignUpData, signUpErrors, setSignUpErrors }),
    [signUpData, signUpErrors],
  );

  return <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>;
};
