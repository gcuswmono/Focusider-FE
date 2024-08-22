import React from 'react';

interface QuizContentAtomProps {
  children: React.ReactNode;
}

const QuizContentAtom = ({ children }: QuizContentAtomProps) => {
  return <div className="my-4 bg-primary-200/50 py-10 pl-12 font-gowun text-h3">{children}</div>;
};

export default QuizContentAtom;
