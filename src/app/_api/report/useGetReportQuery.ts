import { useQuery } from '@tanstack/react-query';
import { reportInfoListSchema } from '@/app/_types/types';
import { BaseResponse, http } from '@/api';

export const useGetReportQueryKey = 'useGetReportQuery';

export const useGetReportQuery = ({ date }: { date: string }) => {
  return useQuery({
    queryKey: [useGetReportQueryKey, date],
    queryFn: async () => {
      const res = await http.get<BaseResponse<void>>({
        url: '/api/week-info',
        params: {
          date,
        },
      });
      return reportInfoListSchema.parse(res.data);
    },
  });
};
