'use client';

import React, { useState } from 'react';
import LoginInput from '@/app/_components/common/atoms/LoginInput';
import { useRouter } from 'next/navigation';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import { toast } from 'react-toastify';
import SlideBanner from '@/app/_components/login/SlideBanner';
import { AppLogoIcon, LogoIcon } from '@/app/_assets/icons';
import Image from 'next/image';
import { useLoginMutation } from '@/app/_api/auth';

const LoginPage = () => {
  const router = useRouter();
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

  const { mutate: loginUser, status } = useLoginMutation({
    onSuccess: () => {
      router.push('/home');
    },
    onError: (error: Error) => {
      toast.error(`로그인 실패: ${error.message}`);
    },
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(form);
    if (status === 'success') {
      router.push('/home');
    } else {
      toast.error('로그인 실패했습니다.', {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  };
  return (
    <section className="flex h-dvh bg-white">
      <div className="w-1/2">
        <SlideBanner />
      </div>

      <div className="flex w-1/2 flex-col items-center justify-center rounded-l-3xl bg-primary-100">
        <div className="flex w-[400px] flex-col items-center gap-y-10">
          <div className="flex flex-col items-center justify-center">
            <Image src={AppLogoIcon} alt="focusider" />
            <Image src={LogoIcon} alt="focusider" />
          </div>
          <div className="flex w-full flex-col items-center gap-y-6">
            <form className="gap-y-4xl flex w-full flex-col" onSubmit={handleLogin}>
              <div className="flex w-full flex-col gap-y-2.5">
                <LoginInput
                  type="text"
                  name="accountId"
                  value={form.accountId}
                  onChange={onChange}
                  placeholder="아이디"
                />
                <LoginInput
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  placeholder="비밀번호"
                />
                <ButtonAtom
                  buttonStyle="dark"
                  text="로그인"
                  type="submit"
                  width="grow"
                  height="56px"
                  rounded="rounded"
                  onClick={() => handleLogin} // 클릭 시 handleLogin 함수 호출
                />
              </div>
            </form>
            <hr className="w-full border-sub-100" />
            <p className="mt-2 text-sub-400">
              아직 회원이 아니신가요?{' '}
              <button
                className="font-semibold underline hover:cursor-pointer"
                onClick={() => router.push('/signup/1')}
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
