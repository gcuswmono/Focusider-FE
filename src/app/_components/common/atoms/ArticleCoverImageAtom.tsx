import Image from 'next/image';
import React from 'react';

interface ArticleCoverImageProps {
  src: string;
  alt: string;
}

const ArticleCoverImageAtom = ({ src, alt }: ArticleCoverImageProps) => {
  return <Image src={src} alt={alt} width={180} height={196} className="rounded-lg object-cover" />;
};

export default ArticleCoverImageAtom;
