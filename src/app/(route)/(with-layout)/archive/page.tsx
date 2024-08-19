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

const ArticleArchivePage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      id: 1,
      category: '과학',
      title: '제목 예시 1',
      date: '2024.07.08',
    },
    { id: 2, category: '기술', title: '제목 예시 2', date: '2024.07.09' },
    { id: 3, category: '문학', title: '제목 예시 3', date: '2024.07.10' },
    { id: 4, category: '문학', title: '제목 예시 3', date: '2024.07.10' },
    { id: 5, category: '문학', title: '제목 예시 3', date: '2024.07.10' },
  ];

  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="">
        <SubtitleModule iconSrc={LightIcon} iconAlt="archive" title="아티클 모아보기" />

        <div className="pt-8">
          <TableContainer>
            <TableHeaderModule>
              <TableHeaderAtom isFirst width="80px">
                번호
              </TableHeaderAtom>
              <TableHeaderAtom width="140px">분류</TableHeaderAtom>
              <TableHeaderAtom width="500px">제목</TableHeaderAtom>
              <TableHeaderAtom width="180px">학습일</TableHeaderAtom>
              <TableHeaderAtom isLast width="180px" />
            </TableHeaderModule>
            <tbody>
              {data.map((item, index) => (
                <TableRowModule key={item.id}>
                  <TableRowAtom isFirst>{item.id}</TableRowAtom>
                  <TableRowAtom>{item.category}</TableRowAtom>
                  <TableRowAtom>{item.title}</TableRowAtom>
                  <TableRowAtom>{item.date}</TableRowAtom>
                  <TableRowAtom isLast>
                    <button
                      className="rounded-full bg-white px-3 py-1.5 text-4 font-semibold text-sub-300"
                      onClick={() => router.push(`/archive/${item.id}`)}
                    >
                      다시 읽어보기
                    </button>
                  </TableRowAtom>
                </TableRowModule>
              ))}
            </tbody>
          </TableContainer>
        </div>
        <div className="flex justify-center py-5">
          <PaginationModule
            totalPages={5}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleArchivePage;
