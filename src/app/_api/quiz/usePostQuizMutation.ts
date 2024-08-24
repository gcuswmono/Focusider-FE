import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponse } from '@/api';
import api from '../Axios';

interface PostQuizRequest {
  quizId: number;
  choiceId: number;
  time: number;
}

interface PostQuizData {
  correctContent: string;
  chooseContent: string;
  commentaryContent: string;
}

export const usePostQuizMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: (data: BaseResponse<PostQuizData>) => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: PostQuizRequest) => {
      const response = await api.post<BaseResponse<PostQuizData>>('/api/quiz', request);
      return response.data;
    },
    onSuccess: (data: BaseResponse<PostQuizData>) => {
      // data를 successCallback에 전달
      /* queryClient.invalidateQueries({
        queryKey: [useGetQuizQueryKey],
      });

      queryClient.refetchQueries({
        queryKey: [useGetQuizQueryKey],
      }); */

      successCallback && successCallback(data);
    },
    onError: (error: Error) => {
      console.error('Failed to post answer:', error);
      errorCallback && errorCallback(error);
    },
  });
};
