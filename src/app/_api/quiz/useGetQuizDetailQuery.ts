import { useQuery } from '@tanstack/react-query';
import { quizInfoSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/app/_api';

export const useGetQuizDetailQueryKey = 'useGetQuizDetailQuery';

export const useGetQuizDetailQuery = (quizId: number) => {
  return useQuery({
    queryKey: [useGetQuizDetailQueryKey, quizId],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: `/api/quiz/${quizId}`,
      });
      return quizInfoSchema.parse(res.data);
    },
  });
};
