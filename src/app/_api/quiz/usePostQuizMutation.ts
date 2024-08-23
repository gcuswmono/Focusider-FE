import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGetQuizQueryKey } from '@/app/_api/quiz/useGetQuizQuery';
import api from '../Axios';

interface PostQuizRequest {
  quizId: number;
  choiceId: number;
  time: number;
}

export const usePostQuizMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: () => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: PostQuizRequest) => {
      const response = await api.post('/api/quiz', request);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [useGetQuizQueryKey],
      });

      queryClient.refetchQueries({
        queryKey: [useGetQuizQueryKey],
      });

      successCallback && successCallback();
    },
    onError: (error: Error) => {
      console.error('Failed to post answer:', error);
      errorCallback && errorCallback(error);
    },
  });
};
