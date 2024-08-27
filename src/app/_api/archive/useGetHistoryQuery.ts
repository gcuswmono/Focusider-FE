import { articleArchiveListSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useGetHistoryQueryKey = 'useGetHistoryQuery';

export const useGetHistoryQuery = ({
  pageParam,
}: {
  pageParam: { page: number; size: number; sort?: string };
}) => {
  return useQuery({
    queryKey: [useGetHistoryQueryKey],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: '/api/article/reading-list',
        params: {
          ...pageParam,
        },
      });
      return articleArchiveListSchema.parse(res.data);
    },
  });
};
