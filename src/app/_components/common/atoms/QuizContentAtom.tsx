import React from 'react';

interface QuizContentAtomProps {
  children: React.ReactNode;
}

const QuizContentAtom = ({ children }: QuizContentAtomProps) => {
  return <div className="font-gowun bg-primary-200/50 py-10 pl-12 text-h3">{children}</div>;
};

export default QuizContentAtom;
