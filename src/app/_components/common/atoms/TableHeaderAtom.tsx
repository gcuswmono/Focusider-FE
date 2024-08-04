import { ReactNode } from 'react';

interface TableHeaderAtomProps {
  children?: ReactNode;
  width?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const TableHeaderAtom = ({ children, width, isFirst, isLast }: TableHeaderAtomProps) => {
  return (
    <th
      className={`px-5 text-center align-middle text-4 font-normal text-sub-200 ${isFirst ? 'pl-8' : ''} ${isLast ? 'pr-8' : ''}`}
      style={{ width }}
    >
      {children}
    </th>
  );
};

export default TableHeaderAtom;
