'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginInput from '@/app/_components/common/atoms/LoginInput';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import { signUp, SignUpRequestBody } from '@/api/auth';
import useSignUp from './SignUpContext';

interface SignupPageProps {
  pageNum: string;
  onNext: (data: Partial<SignUpRequestBody>) => void;
}

const CreateAccountForm = ({ pageNum, onNext }: SignupPageProps) => {
  const [localData, setLocalData] = useState<{
    accountId: string;
    password: string;
  }>({
    accountId: '',
    password: '',
  });
  const { setSignUpData, signUpData } = useSignUp();
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  const [error, setError] = useState<{
    accountId: string | null;
    password: string | null;
    confirmPassword: string | null;
  }>({
    accountId: null,
    password: null,
    confirmPassword: null,
  });
  const [isIdAvailable, setIsIdAvailable] = useState<boolean | null>(null);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setLocalData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (localData.password && confirmPassword) {
      setPasswordMatch(localData.password === confirmPassword);
    } else {
      setPasswordMatch(null);
    }
  }, [confirmPassword, localData.password]);

  const checkIdAvailability = () => {
    // 아이디 중복확인 로직 추가
    // 중복 확인 결과에 따라 setIsIdAvailable(true 또는 false) 호출
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!localData.accountId || !localData.password) {
      setError({
        ...error,
        accountId: !localData.accountId ? '아이디를 입력해주세요.' : null,
        password: !localData.password ? '비밀번호를 입력해주세요.' : null,
      });
      return;
    }
    signUpData.accountId = localData.accountId;
    signUpData.password = localData.password;
    console.log(signUpData);
    router.push(`/signup/${parseInt(pageNum, 10) + 1}`);
  };

  return (
    <section className="flex w-full items-center justify-center bg-primary-100">
      <div className="flex h-dvh w-[440px] flex-col items-center justify-center gap-y-6">
        <h1 className="w-full text-h3 font-bold">계정 생성하기</h1>
        <form className="flex w-full flex-col gap-y-10" onSubmit={handleSignup}>
          <div className="flex w-full flex-col gap-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold">아이디</p>
              {isIdAvailable !== null && (
                <span className={`text-sm ${isIdAvailable ? 'text-primary' : 'text-negative'}`}>
                  {isIdAvailable ? '사용 가능한 아이디입니다.' : '이미 사용 중인 아이디입니다.'}
                </span>
              )}
            </div>
            <LoginInput
              type="text"
              name="accountId"
              value={localData.accountId || ''}
              onChange={onChange}
              placeholder="아이디"
              error={error.accountId}
              showDuplicateCheck
              onDuplicateCheckClick={checkIdAvailability}
            />
          </div>

          <div className="flex w-full flex-col gap-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold">비밀번호</p>
              {passwordMatch !== null && (
                <span className={`text-sm ${passwordMatch ? 'text-primary' : 'text-negative'}`}>
                  {passwordMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
                </span>
              )}
            </div>
            <LoginInput
              type="password"
              name="password"
              value={localData.password || ''}
              onChange={onChange}
              placeholder="비밀번호"
              error={error.password}
            />

            <LoginInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="비밀번호 재확인"
              error={error.confirmPassword}
            />
          </div>
          <ButtonAtom
            buttonStyle="dark"
            text="다음"
            type="submit"
            width="grow"
            height="56px"
            rounded="rounded"
          />
        </form>
      </div>
    </section>
  );
};

export default CreateAccountForm;
