'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addMonths, format, isAfter, subMonths } from 'date-fns';
import Image from 'next/image';
import TableContainer from '@/app/_components/common/containers/TableContainer';
import TableHeaderModule from '@/app/_components/common/modules/TableHeaderModule';
import TableHeaderAtom from '@/app/_components/common/atoms/TableHeaderAtom';
import TableRowModule from '@/app/_components/common/modules/TableRowModule';
import TableRowAtom from '@/app/_components/common/atoms/TableRowAtom';
import Loading from '@/app/_components/common/atoms/Loading';
import { ChevronLeftBlackIcon, ChevronRightBlackIcon } from '@/app/_assets/icons';
import { useGetReportQuery } from '@/app/_api/report/useGetReportQuery';

const ArticleArchivePage = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date(); // 현재 날짜
  const isNextMonthDisabled = isAfter(addMonths(currentDate, 1), today);

  const formattedDate = format(currentDate, 'yyyy-MM-01');

  const { data, isLoading, isError } = useGetReportQuery({ date: formattedDate });

  const handleNextMonth = () => {
    if (!isNextMonthDisabled) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <div>Failed to load data.</div>;
  }

  const articles = data?.weekInfoInfos ?? [];

  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="">
        <div className="w-[1080px] pt-8">
          <div className="relative mb-8 flex items-center justify-center">
            <button onClick={handlePrevMonth} className="absolute left-0">
              <Image src={ChevronLeftBlackIcon} alt="<" />
            </button>
            <span className="text-lg font-semibold">{format(currentDate, 'yyyy년 MM월')}</span>
            {!isNextMonthDisabled && (
              <button onClick={handleNextMonth} className="absolute right-0">
                <Image src={ChevronRightBlackIcon} alt=">" />
              </button>
            )}
          </div>

          <TableContainer>
            <TableHeaderModule>
              <TableHeaderAtom isFirst width="80px">
                번호
              </TableHeaderAtom>
              <TableHeaderAtom>제목</TableHeaderAtom>
              <TableHeaderAtom isLast width="180px" />
            </TableHeaderModule>
            <tbody>
              {articles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="mt-4 rounded-md py-8 text-center text-sub-200">
                    내역이 존재하지 않습니다.
                  </td>
                </tr>
              ) : (
                articles.map((item, index) => (
                  <TableRowModule key={item.weekInfoId}>
                    <TableRowAtom isFirst>{index + 1}</TableRowAtom>

                    <TableRowAtom>{item.title}</TableRowAtom>

                    <TableRowAtom isLast>
                      <button
                        className="rounded-full bg-white px-3 py-1.5 text-4 font-semibold text-sub-300"
                        onClick={() => router.push(`/archive/${item.weekInfoId}`)}
                      >
                        다시 읽어보기
                      </button>
                    </TableRowAtom>
                  </TableRowModule>
                ))
              )}
            </tbody>
          </TableContainer>
        </div>
      </div>
    </section>
  );
};

export default ArticleArchivePage;
