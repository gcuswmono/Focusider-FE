import React from 'react';

interface FontSizeControllerAtomProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const FontSizeControllerAtom: React.FC<FontSizeControllerAtomProps> = ({
  onClick,
  children,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`border border-stroke-100 bg-white px-3.5 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default FontSizeControllerAtom;
