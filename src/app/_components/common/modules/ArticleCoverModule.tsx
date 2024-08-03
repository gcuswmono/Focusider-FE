import React from 'react';
import ArticleCoverImageAtom from '@/app/_components/common/atoms/ArticleCoverImageAtom';
import ArticleCoverTitleAtom from '@/app/_components/common/atoms/ArticleCoverTitleAtom';
import { PointScanIcon } from '@/app/_assets/icons';
import Image from 'next/image';

interface ArticleCoverModuleProps {
  title: string;
  src: string;
  alt: string;
  bgColor: string;
}

const ArticleCoverModule = ({ title, src, alt, bgColor }: ArticleCoverModuleProps) => {
  return (
    <button className={`flex flex-col ${bgColor} h-[338px] w-[310px] gap-y-5 rounded-lg p-6`}>
      <div className="mb-2 flex w-full items-start justify-between">
        <ArticleCoverTitleAtom title={title} />
        <Image src={PointScanIcon} alt="icon" width={24} height={24} />
      </div>
      <div className="flex w-full items-end justify-end">
        <ArticleCoverImageAtom src={src} alt={alt} />
      </div>
    </button>
  );
};

export default ArticleCoverModule;
