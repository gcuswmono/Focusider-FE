import Image from 'next/image';
import React from 'react';

interface ArticleCoverImageProps {
  src: string;
  alt: string;
}

const ArticleCoverImageAtom = ({ src, alt }: ArticleCoverImageProps) => {
  return <Image src={src} alt={alt} width={220} height={220} className="rounded-lg object-cover" />;
};

export default ArticleCoverImageAtom;
