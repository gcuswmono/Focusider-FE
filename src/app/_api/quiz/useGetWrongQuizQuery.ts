import { useQuery } from '@tanstack/react-query';
import { quizListSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/app/_api';

export const useGetWrongQuizQueryKey = 'useGetWrongQuizQuery';

export const useGetWrongQuizQuery = ({
  pageParam,
}: {
  pageParam: { page: number; size: number; sort?: string };
}) => {
  return useQuery({
    queryKey: [useGetWrongQuizQueryKey, pageParam],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: '/api/quiz/wrong/list',
        params: {
          ...pageParam,
        },
      });
      return quizListSchema.parse(res.data);
    },
  });
};
