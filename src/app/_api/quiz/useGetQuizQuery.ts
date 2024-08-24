import { useQuery } from '@tanstack/react-query';
import { quizInfoSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/api';

export const useGetQuizQueryKey = 'useGetQuizQuery';

export const useGetQuizQuery = () => {
  return useQuery({
    queryKey: [useGetQuizQueryKey],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: '/api/quiz',
      });
      return quizInfoSchema.parse(res.data);
    },
  });
};
