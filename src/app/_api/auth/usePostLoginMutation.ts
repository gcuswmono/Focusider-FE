import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../Axios';

export const useLoginMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: () => void;
  errorCallback?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: { accountId: string; password: string }) => {
      const response = await api.post('/api/auth/login', request);
      return response.data;
    },
    onSuccess: () => {
      successCallback && successCallback();
    },
    onError: (error: Error) => {
      errorCallback && errorCallback(error);
    },
  });
};
