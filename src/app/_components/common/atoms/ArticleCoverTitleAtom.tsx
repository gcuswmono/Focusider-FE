import React from 'react';

interface ArticleCoverTitleProps {
  title: string;
}

const ArticleCoverTitleAtom = ({ title }: ArticleCoverTitleProps) => {
  return <p className="whitespace-pre-line text-left text-2xl font-semibold">{title}</p>;
};

export default ArticleCoverTitleAtom;
