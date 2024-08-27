'use client';

import { useRouter } from 'next/navigation';
import FontSizeControllerModule from '@/app/_components/common/modules/FontSizeControllerModule';
import { useGetArticleQuery } from '@/app/_api/article/useGetArticleQuery';
import Loading from '@/app/_components/common/atoms/Loading';
import React, { useEffect, useState } from 'react';
import HeaderNextModule from '@/app/_components/common/modules/HeaderNextModule';
import ModalModule from '@/app/_components/common/modules/ModalModule';
import { ClapIcon } from '@/app/_assets/icons';

const ArticlePage = () => {
  const { data, isLoading, isError } = useGetArticleQuery();
  const [readTime, setReadTime] = useState(0);
  const router = useRouter(); // 페이지 이동을 위한 useRouter
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = Math.floor((currentTime - startTime) / 1000);
      setReadTime(elapsed);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleNextButtonClick = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      router.push(`/article/chat?readTime=${readTime}`);
    }, 3000);
  };

  if (isLoading) return <Loading />;
  if (isError || !data) return <p>error</p>;

  return (
    <section>
      <HeaderNextModule onClick={handleNextButtonClick} />
      <div className="px-12 pt-10">
        <FontSizeControllerModule initialSize={16} title={data.title}>
          <div className="max-h-[calc(100vh*0.60)] overflow-y-auto whitespace-pre-line py-6 lg:max-h-[calc(100vh*0.70)]">
            {data.content}
          </div>
        </FontSizeControllerModule>
      </div>
      {showModal && (
        <ModalModule
          iconSrc={ClapIcon}
          iconAlt="Icon"
          title={'읽기가 끝났습니다! \n이제 여러분의 생각을 나눠보세요'}
        />
      )}
    </section>
  );
};

export default ArticlePage;
