import { BaseResponse, http } from '@/app/_api';
import { useMutation } from '@tanstack/react-query';

export const useLogoutMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: () => void;
  errorCallback?: (error: Error) => void;
}) => {
  return useMutation({
    mutationFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: '/api/auth/logout',
      });
      return res;
    },
    onSuccess: () => {
      if (successCallback) successCallback();
    },
    onError: (error: Error) => {
      if (errorCallback) errorCallback(error);
    },
  });
};
