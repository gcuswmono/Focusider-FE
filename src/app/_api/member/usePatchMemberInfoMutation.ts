import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseResponse } from '@/app/_api';
import { useGetMemberInfoQueryKey } from '@/app/_api/member/useGetMemberInfoQuery';
import api from '../Axios';

interface PatchMemberInfoRequest {
  profileImageUrl: string;
  name: string;
}

export const usePatchMemberInfoMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: () => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: PatchMemberInfoRequest) => {
      const response = await api.patch<BaseResponse<void>>('/api/member', request);
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
      console.error('Failed to patch member info:', error);
      errorCallback && errorCallback(error);
    },
  });
};
