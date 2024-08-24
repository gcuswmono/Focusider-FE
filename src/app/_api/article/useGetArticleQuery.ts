import { articleInfoSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useGetArticleQueryKey = 'useGetArticleQuery';

export const useGetArticleQuery = () => {
  return useQuery({
    queryKey: [useGetArticleQueryKey],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: '/api/article',
      });
      return articleInfoSchema.parse(res.data);
    },
  });
};
