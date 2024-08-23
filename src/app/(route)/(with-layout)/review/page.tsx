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
import { useGetWrongQuizQuery } from '@/app/_api/quiz/useGetWrongQuizQuery';
import { format } from 'date-fns';
import { KeywordType, KeywordTypeConverter } from '@/app/_types/converter';

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

  const {
    data: reviewData,
    isLoading,
    isError,
  } = useGetWrongQuizQuery({
    pageParam: {
      page: currentPage,
      size: 5,
    },
  });

  // 로딩 중일 때 처리
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  // 에러가 발생했을 때 처리
  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  const data = reviewData?.quizInfos || [];

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
              {data.map((item, index) => (
                <TableRowModule key={item.quizId}>
                  <TableRowAtom isFirst>{index + 1}</TableRowAtom>
                  <TableRowAtom>{getDifficultyStars(item.level)}</TableRowAtom>
                  <TableRowAtom>
                    {item.keywordInfos.map((keyword) => (
                      <p
                        key={keyword.keywordType}
                        className="mr-2 inline-block rounded-full bg-white px-3 py-1.5 text-4 font-semibold text-sub-300"
                      >
                        {KeywordTypeConverter[keyword.keywordType as KeywordType] ||
                          keyword.keywordType}
                      </p>
                    ))}
                  </TableRowAtom>

                  <TableRowAtom>
                    {item.createdAt ? format(new Date(item.createdAt), 'yyyy.MM.dd') : ''}
                  </TableRowAtom>
                  <TableRowAtom>
                    {item.updatedAt ? format(new Date(item.updatedAt), 'yyyy.MM.dd') : ''}
                  </TableRowAtom>
                  <TableRowAtom isLast>
                    <button
                      className="rounded-full bg-white px-3 py-1.5 text-4 font-semibold text-sub-300"
                      onClick={() => router.push(`/review/${item.quizId}`)}
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
            totalPages={reviewData?.pageInfo.totalPages || 1}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default QuizReviewPage;
