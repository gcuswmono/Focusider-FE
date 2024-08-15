'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CompletionPage = () => {
  const router = useRouter();

  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center bg-primary-100">
      <div className="flex h-dvh w-[440px] flex-col items-center justify-center gap-y-6">
        <h1 className="text-center text-h3 font-bold">답변해주셔서 감사합니다.</h1>
        <p className="text-center text-sub-300">
          000님을 위한 맞춤형 콘텐츠 설정이 완료되었어요! <br />
          지금 바로 포커사이더 서비스를 이용해보세요.
        </p>

        <button
          onClick={() => router.push('/home')}
          className="mt-4 h-14 w-full rounded bg-primary p-2 font-semibold text-white"
        >
          홈페이지로 이동
        </button>
      </div>
    </section>
  );
};

export default CompletionPage;
