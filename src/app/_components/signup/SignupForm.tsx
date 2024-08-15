'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginInput from '@/app/_components/common/atoms/LoginInput';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';

interface SignupPageProps {
  pageNum: string;
}

const SignupPage = ({ pageNum }: SignupPageProps) => {
  const router = useRouter();
  const [form, setForm] = useState({
    accountId: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    accountId: null,
    password: null,
    confirmPassword: null,
  });
  const [isIdAvailable, setIsIdAvailable] = useState<boolean | null>(null);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (form.password && form.confirmPassword) {
      setPasswordMatch(form.password === form.confirmPassword);
    } else {
      setPasswordMatch(null);
    }
  }, [form.password, form.confirmPassword]);

  const checkIdAvailability = () => {
    // 아이디 중복확인 로직 추가
    // 중복 확인 결과에 따라 setIsIdAvailable(true 또는 false) 호출
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 로직 추가
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
              value={form.accountId}
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
              value={form.password}
              onChange={onChange}
              placeholder="비밀번호"
              error={error.password}
            />

            <LoginInput
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
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

export default SignupPage;
