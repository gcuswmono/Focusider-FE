import React from 'react';

interface ModalTitleAtomProps {
  title: string;
}

const ModalTitleAtom = ({ title }: ModalTitleAtomProps) => {
  return <div className="w-full text-center text-1 font-bold">{title}</div>;
};

export default ModalTitleAtom;
