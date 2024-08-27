'use client';

import FontSizeControllerModule from '@/app/_components/common/modules/FontSizeControllerModule';
import { useGetArticleDetailQuery } from '@/app/_api/archive/useGetArticleDetailQuery';
import Loading from '@/app/_components/common/atoms/Loading';

const ArticleDetailPage = () => {
  const articleId =
    typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : null;

  const { data: article, isLoading, error } = useGetArticleDetailQuery(Number(articleId));

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error fetching article details.</p>;
  }

  return (
    <section className="px-12 pt-8">
      {article && (
        <FontSizeControllerModule initialSize={16} title={article.title}>
          <div className="max-h-[calc(100vh*0.60)] overflow-y-auto whitespace-pre-line py-6 lg:max-h-[calc(100vh*0.70)]">
            {article.content}
          </div>
        </FontSizeControllerModule>
      )}
    </section>
  );
};

export default ArticleDetailPage;
