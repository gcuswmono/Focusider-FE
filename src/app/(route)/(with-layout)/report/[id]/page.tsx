'use client';

import { useGetReportDetailQuery } from '@/app/_api/report/useGetReportDetailQuery';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { format } from 'date-fns';
import Loading from '@/app/_components/common/atoms/Loading';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ReadingStatInfo {
  readingDate: string;
  readingTime: number;
  understanding: number;
}

const ReportDetailPage = () => {
  const weekInfoId =
    typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : null;

  const { data, isLoading, isError } = useGetReportDetailQuery(Number(weekInfoId));

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <p>Error fetching article details.</p>;
  }

  const dates = data?.readingStatInfos.map((stat: ReadingStatInfo) =>
    format(new Date(stat.readingDate), 'MM/dd'),
  );
  const readingTimes = data?.readingStatInfos.map((stat: ReadingStatInfo) => stat.readingTime);
  const understanding = data?.readingStatInfos.map((stat: ReadingStatInfo) => stat.understanding);

  const readingTimeData = {
    labels: dates,
    datasets: [
      {
        label: 'Reading Time (minutes)',
        data: readingTimes,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const understandingData = {
    labels: dates,
    datasets: [
      {
        label: 'Understanding (%)',
        data: understanding,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="px-12 pt-8">
      <p className="mb-7 px-2 text-2xl font-semibold">{data.title}</p>

      <div className="flex w-full px-6">
        <div className="flex w-full flex-col gap-y-1.5">
          <p className="mb-4 pl-1 text-2 font-semibold">📚 읽기 시간</p>
          <Line data={readingTimeData} options={options} />
        </div>

        <div className="flex w-full flex-col gap-y-1.5">
          <p className="mb-4 pl-1 text-2 font-semibold">📊 이해도</p>
          <Line data={understandingData} options={options} />
        </div>
      </div>
      <div className="w-full px-6 py-10">
        <p className="mb-4 text-2 font-semibold">✏️ 코멘트</p>
        <p className="px-6">{data.comment}</p>
      </div>
    </section>
  );
};

export default ReportDetailPage;
