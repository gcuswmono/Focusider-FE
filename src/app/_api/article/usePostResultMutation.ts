import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponse } from '@/app/_api';
import api from '../Axios';

interface EndRequest {
  articleId: number;
  readTime: number;
}

export const usePostResultMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: (data: BaseResponse<void>) => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: EndRequest) => {
      const response = await api.post<BaseResponse<void>>('/api/article/end', request);
      return response.data;
    },
    onSuccess: (data: BaseResponse<void>) => {
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
      console.error('Failed to post result:', error);
      errorCallback && errorCallback(error);
    },
  });
};
