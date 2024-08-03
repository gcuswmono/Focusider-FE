'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import PaginationButtonAtom from '@/app/_components/common/atoms/PaginationButtonAtom';
import {
  ChevronLeftBlackIcon,
  ChevronLeftEmptyIcon,
  ChevronRightBlackIcon,
  ChevronRightEmptyIcon,
} from '@/app/_assets/icons';

interface PageProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginationModule = ({ totalPages, currentPage, setCurrentPage }: PageProps) => {
  const [startPage, setStartPage] = useState(1);
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  const handleNext = () => {
    const nextStartPage = startPage + 5;
    if (nextStartPage <= totalPages) {
      setStartPage(nextStartPage);
      setCurrentPage(nextStartPage);
    }
  };

  const handlePrev = () => {
    const prevStartPage = startPage - 5;
    if (prevStartPage > 0) {
      setStartPage(prevStartPage);
      setCurrentPage(prevStartPage);
    }
  };

  const getLeftArrowIcon = () => (startPage > 1 ? ChevronLeftBlackIcon : ChevronLeftEmptyIcon);
  const getRightArrowIcon = () =>
    startPage + 5 <= totalPages ? ChevronRightBlackIcon : ChevronRightEmptyIcon;

  const endPage = Math.min(startPage + 4, totalPages);

  return (
    <div className="flex">
      <div className="flex h-12 w-12 items-center justify-center">
        <button onClick={handlePrev} disabled={startPage === 1}>
          <Image src={getLeftArrowIcon()} alt="LeftArrowIcon" />
        </button>
      </div>
      <div className="flex">
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <PaginationButtonAtom
            key={index}
            onPage={index + startPage === currentPage}
            page={index + startPage}
            onClick={() => handlePageClick(index + startPage)}
            disabled={index + startPage > totalPages}
          />
        ))}
      </div>
      <div className="flex h-12 w-12 items-center justify-center">
        <button onClick={handleNext} disabled={endPage === totalPages}>
          <Image src={getRightArrowIcon()} alt="RightArrowIcon" />
        </button>
      </div>
    </div>
  );
};

export default PaginationModule;
