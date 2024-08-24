import { useMutation } from '@tanstack/react-query';
import api from '../Axios';

type FilePostRequest = {
  file: File;
};

export const usePostFileMutation = ({
  successCallback,
  errorCallback,
}: {
  successCallback?: (imageUrl: string) => void;
  errorCallback?: (error: Error) => void;
}) => {
  return useMutation({
    mutationFn: async (request: FilePostRequest) => {
      const formData = new FormData();
      formData.append('profileImage', request.file);

      const response = await api.post('/api/file', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return response.data;
    },
    onSuccess: (data) => {
      if (successCallback) {
        successCallback(data.data.imageUrl);
      }
    },
    onError: (error: Error) => {
      if (errorCallback) {
        errorCallback(error);
      }
    },
  });
};
