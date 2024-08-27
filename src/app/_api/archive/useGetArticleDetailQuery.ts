import { useQuery } from '@tanstack/react-query';
import { articleDetailIinfoSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/api';

export const useGetArticleDetailQueryKey = 'useGetArticleDetailQuery';

export const useGetArticleDetailQuery = (articleId: number) => {
  return useQuery({
    queryKey: [useGetArticleDetailQueryKey, articleId],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: `/api/article/reading-detail/${articleId}`,
      });
      return articleDetailIinfoSchema.parse(res.data);
    },
  });
};
