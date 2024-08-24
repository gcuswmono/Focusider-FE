import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponse } from '@/api';
import { useGetWrongQuizQueryKey } from '@/app/_api/quiz/useGetWrongQuizQuery';
import api from '../Axios';

interface PatchQuizRequest {
  quizAttemptId: number;
  choiceId: number;
  time: number;
}

interface PatchQuizData {
  correctContent: string;
  chooseContent: string;
  commentaryContent: string;
}

export const usePatchQuizMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: (data: BaseResponse<PatchQuizData>) => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: PatchQuizRequest) => {
      const response = await api.patch<BaseResponse<PatchQuizData>>('/api/quiz', request);
      return response.data;
    },
    onSuccess: (data: BaseResponse<PatchQuizData>) => {
      queryClient.invalidateQueries({
        queryKey: [useGetWrongQuizQueryKey],
      });

      queryClient.refetchQueries({
        queryKey: [useGetWrongQuizQueryKey],
      });

      successCallback && successCallback(data);
    },
    onError: (error: Error) => {
      console.error('Failed to post answer:', error);
      errorCallback && errorCallback(error);
    },
  });
};
