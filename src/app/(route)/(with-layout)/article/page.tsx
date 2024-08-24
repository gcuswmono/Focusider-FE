'use client';

import FontSizeControllerModule from '@/app/_components/common/modules/FontSizeControllerModule';
import { useGetArticleQuery } from '@/app/_api/article/useGetArticleQuery';
import Loading from '@/app/_components/common/atoms/Loading';
import React from 'react';

const ArticlePate = () => {
  const { data, isLoading, isError } = useGetArticleQuery();

  if (isLoading) return <Loading />;
  if (isError || !data) return <p>error</p>;

  return (
    <section className="px-12 pt-10">
      <FontSizeControllerModule initialSize={16} title={data.title}>
        <div className="max-h-[calc(100vh*0.60)] overflow-y-auto whitespace-pre-line py-6 lg:max-h-[calc(100vh*0.70)]">
          {data.content}
        </div>
      </FontSizeControllerModule>
    </section>
  );
};

export default ArticlePate;
