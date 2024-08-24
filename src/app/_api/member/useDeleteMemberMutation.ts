import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponse } from '@/api';
import { useGetMemberInfoQueryKey } from '@/app/_api/member/useGetMemberInfoQuery';
import api from '../Axios';

export const useDeleteMemberMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: () => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await api.delete<BaseResponse<void>>('/api/member');
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [useGetMemberInfoQueryKey],
      });

      queryClient.refetchQueries({
        queryKey: [useGetMemberInfoQueryKey],
      });

      successCallback && successCallback();
    },
    onError: (error: Error) => {
      console.error('Failed to delete account:', error);
      errorCallback && errorCallback(error);
    },
  });
};
