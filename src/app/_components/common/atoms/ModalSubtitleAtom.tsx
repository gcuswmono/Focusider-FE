import React from 'react';

interface ModalTitleAtomProps {
  subtitle: string;
}

const ModalSubtitleAtom = ({ subtitle }: ModalTitleAtomProps) => {
  return <p className="text-4 text-sub-300 w-full text-center">{subtitle}</p>;
};

export default ModalSubtitleAtom;
