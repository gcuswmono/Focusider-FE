import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponse } from '@/api';
import api from '../Axios';

interface ChatRequest {
  articleId: number;
  question: string;
  answer: string;
}

interface ChatResponse {
  question: string;
}

export const usePostChatMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: (data: BaseResponse<ChatResponse>) => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: ChatRequest) => {
      const response = await api.post<BaseResponse<ChatResponse>>('/api/article/chat', request);
      return response.data;
    },
    onSuccess: (data: BaseResponse<ChatResponse>) => {
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
      console.error('Failed to post chat:', error);
      errorCallback && errorCallback(error);
    },
  });
};
