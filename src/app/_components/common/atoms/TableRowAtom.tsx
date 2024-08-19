import React, { ReactNode } from 'react';

interface TableRowAtomProps {
  children?: ReactNode;
  fontSize?: string;
  color?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const TableRowAtom = ({ children, fontSize, color, isFirst, isLast }: TableRowAtomProps) => {
  return (
    <td
      className={`text-center ${fontSize || 'text-3'} ${color || ''} border-y border-stroke-100 px-5 ${isFirst ? 'rounded-l-regular border-l pl-8' : ''} ${isLast ? 'rounded-r-regular border-r pr-8' : ''}`}
    >
      {children}
    </td>
  );
};

export default TableRowAtom;
