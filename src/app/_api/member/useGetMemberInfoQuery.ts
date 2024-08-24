import { memberInfoSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useGetMemberInfoQueryKey = 'useGetMemberInfoQuery';

export const useGetMemberInfoQuery = () => {
  return useQuery({
    queryKey: [useGetMemberInfoQueryKey],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: '/api/member',
      });
      return memberInfoSchema.parse(res.data);
    },
  });
};
