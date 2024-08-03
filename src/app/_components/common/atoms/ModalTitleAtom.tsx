import React from 'react';

interface ModalTitleAtomProps {
  title: string;
}

const ModalTitleAtom = ({ title }: ModalTitleAtomProps) => {
  return <div className="text-1 w-full text-center font-bold">{title}</div>;
};

export default ModalTitleAtom;
