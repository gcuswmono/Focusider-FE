'use client';

import React, { useState } from 'react';
import LoginInput from '@/app/_components/common/atoms/LoginInput';
import { useRouter } from 'next/navigation';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    accountId: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직 추가
  };

  return (
    <section className="flex h-dvh">
      {/* TODO : 왼쪽 절반 영역에 배너 추가 */}
      <div className="w-1/2" />

      <div className="flex w-1/2 flex-col items-center justify-center rounded-l-3xl bg-primary-100">
        <div className="flex w-[400px] flex-col items-center gap-y-20">
          <p>로고 이미지</p>
          <div className="flex w-full flex-col items-center gap-y-6">
            <form className="gap-y-4xl flex w-full flex-col" onSubmit={handleLogin}>
              <div className="flex w-full flex-col gap-y-2.5">
                <LoginInput
                  type="text"
                  name="accountId"
                  value={form.accountId}
                  onChange={onChange}
                  placeholder="아이디"
                  error={error === '사용자를 찾을 수 없습니다.' ? error : null}
                />
                <LoginInput
                  type="pwd"
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  placeholder="비밀번호"
                  error={error !== '사용자를 찾을 수 없습니다.' ? error : null}
                />
                <ButtonAtom
                  buttonStyle="dark"
                  text="로그인"
                  type="submit"
                  width="grow"
                  height="56px"
                  rounded="rounded"
                  onClick={() => handleLogin}
                />
              </div>
            </form>
            <hr className="w-full border-sub-100" />
            <p className="mt-2 text-sub-400">
              아직 회원이 아니신가요?{' '}
              <button
                className="font-semibold underline hover:cursor-pointer"
                onClick={() => router.push('/signup')}
              >
                회원가입 하기
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
