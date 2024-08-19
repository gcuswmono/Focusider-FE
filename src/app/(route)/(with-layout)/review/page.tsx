'use client';

import SubtitleModule from '@/app/_components/common/modules/SubtitleModule';
import { BookIcon, StarBorderIcon, StarIcon } from '@/app/_assets/icons';
import TableContainer from '@/app/_components/common/containers/TableContainer';
import TableHeaderModule from '@/app/_components/common/modules/TableHeaderModule';
import TableHeaderAtom from '@/app/_components/common/atoms/TableHeaderAtom';
import TableRowModule from '@/app/_components/common/modules/TableRowModule';
import TableRowAtom from '@/app/_components/common/atoms/TableRowAtom';
import PaginationModule from '@/app/_components/common/modules/PaginationModule';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const getDifficultyStars = (level: number) => {
  const filledStars = level;
  const emptyStars = 3 - level;

  return (
    <div className="flex justify-center">
      {Array.from({ length: filledStars }, (_, index) => (
        <Image src={StarIcon} alt="채워진 별" key={`filled-${index}`} />
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <Image src={StarBorderIcon} alt="빈 별" key={`empty-${index}`} />
      ))}
    </div>
  );
};

const QuizReviewPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      id: 1,
      level: 0,
      category: '과학',
      title: '속담, 어휘',
      studyDate: '2024.07.08',
      reviewDate: '2024.08.01',
    },
    {
      id: 2,
      level: 1,
      category: '기술',
      title: '속담, 어휘',
      studyDate: '2024.07.09',
      reviewDate: '2024.08.05',
    },
    {
      id: 3,
      level: 2,
      category: '문학',
      title: '속담, 어휘',
      studyDate: '2024.07.10',
      reviewDate: '2024.08.10',
    },
    {
      id: 4,
      level: 3,
      category: '문학',
      title: '속담, 어휘',
      studyDate: '2024.07.11',
      reviewDate: '2024.08.15',
    },
    {
      id: 5,
      level: 1,
      category: '문학',
      title: '속담, 어휘',
      studyDate: '2024.07.12',
      reviewDate: '2024.08.20',
    },
  ];

  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="">
        <SubtitleModule iconSrc={BookIcon} iconAlt="archive" title="오답노트" />

        <div className="w-[1080px] pt-8">
          <TableContainer>
            <TableHeaderModule>
              <TableHeaderAtom isFirst width="80px">
                번호
              </TableHeaderAtom>
              <TableHeaderAtom width="140px">난이도</TableHeaderAtom>
              <TableHeaderAtom>분류</TableHeaderAtom>
              <TableHeaderAtom width="150px">학습일</TableHeaderAtom>
              <TableHeaderAtom width="150px">재학습일</TableHeaderAtom>
              <TableHeaderAtom isLast width="180px" />
            </TableHeaderModule>
            <tbody>
              {data.map((item) => (
                <TableRowModule key={item.id}>
                  <TableRowAtom isFirst>{item.id}</TableRowAtom>
                  <TableRowAtom>{getDifficultyStars(item.level)}</TableRowAtom>
                  <TableRowAtom>{item.title}</TableRowAtom>
                  <TableRowAtom>{item.studyDate}</TableRowAtom>
                  <TableRowAtom>{item.reviewDate}</TableRowAtom>
                  <TableRowAtom isLast>
                    <button
                      className="rounded-full bg-white px-3 py-1.5 text-4 font-semibold text-sub-300"
                      onClick={() => router.push(`/review/${item.id}`)}
                    >
                      다시 풀기
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

export default QuizReviewPage;
