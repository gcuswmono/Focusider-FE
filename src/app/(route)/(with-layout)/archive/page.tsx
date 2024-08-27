'use client';

import SubtitleModule from '@/app/_components/common/modules/SubtitleModule';
import { LightIcon } from '@/app/_assets/icons';
import TableContainer from '@/app/_components/common/containers/TableContainer';
import TableHeaderModule from '@/app/_components/common/modules/TableHeaderModule';
import TableHeaderAtom from '@/app/_components/common/atoms/TableHeaderAtom';
import TableRowModule from '@/app/_components/common/modules/TableRowModule';
import TableRowAtom from '@/app/_components/common/atoms/TableRowAtom';
import PaginationModule from '@/app/_components/common/modules/PaginationModule';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetHistoryQuery } from '@/app/_api/archive/useGetHistoryQuery';
import Loading from '@/app/_components/common/atoms/Loading';
import { ArticleKeywordType, ArticleKeywordTypeConverter } from '@/app/_types/converter';
import { format } from 'date-fns';

const ArticleArchivePage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useGetHistoryQuery({
    pageParam: {
      page: currentPage,
      size: 5,
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <div>Failed to load data.</div>;
  }

  const articles = data?.readingInfos ?? [];

  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="">
        <SubtitleModule iconSrc={LightIcon} iconAlt="archive" title="아티클 모아보기" />

        <div className="w-[1080px] pt-8">
          <TableContainer>
            <TableHeaderModule>
              <TableHeaderAtom isFirst width="80px">
                번호
              </TableHeaderAtom>
              <TableHeaderAtom width="140px">분류</TableHeaderAtom>
              <TableHeaderAtom>제목</TableHeaderAtom>
              <TableHeaderAtom width="180px">학습일</TableHeaderAtom>
              <TableHeaderAtom isLast width="180px" />
            </TableHeaderModule>
            <tbody>
              {articles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="mt-4 rounded-md py-52 text-center text-sub-200">
                    내역이 존재하지 않습니다.
                  </td>
                </tr>
              ) : (
                articles.map((item, index) => (
                  <TableRowModule key={item.articleId}>
                    <TableRowAtom isFirst>{index + 1}</TableRowAtom>
                    <TableRowAtom>
                      {ArticleKeywordTypeConverter[item.categoryType as ArticleKeywordType]}
                    </TableRowAtom>
                    <TableRowAtom>{item.title}</TableRowAtom>
                    <TableRowAtom>
                      {item.readingDate ? format(new Date(item.readingDate), 'yyyy.MM.dd') : ''}
                    </TableRowAtom>
                    <TableRowAtom isLast>
                      <button
                        className="rounded-full bg-white px-3 py-1.5 text-4 font-semibold text-sub-300"
                        onClick={() => router.push(`/archive/${item.articleId}`)}
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

        {articles.length > 0 && (
          <div className="flex justify-center py-5">
            <PaginationModule
              totalPages={data.pageInfo.totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleArchivePage;
