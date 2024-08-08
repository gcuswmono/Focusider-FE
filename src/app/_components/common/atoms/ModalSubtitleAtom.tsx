import React from 'react';

interface ModalTitleAtomProps {
  subtitle: string;
}

const ModalSubtitleAtom = ({ subtitle }: ModalTitleAtomProps) => {
  return <p className="w-full text-center text-4 text-sub-300">{subtitle}</p>;
};

export default ModalSubtitleAtom;
