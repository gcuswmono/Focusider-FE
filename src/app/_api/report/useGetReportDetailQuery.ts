import { useQuery } from '@tanstack/react-query';
import { reportDetailInfoSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/api';

export const useGetReportDetailQueryKey = 'useGetReportDetailQuery';

export const useGetReportDetailQuery = (weekInfoId: number) => {
  return useQuery({
    queryKey: [useGetReportDetailQueryKey, weekInfoId],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: `/api/article/stat/${weekInfoId}`,
      });
      return reportDetailInfoSchema.parse(res.data);
    },
  });
};
