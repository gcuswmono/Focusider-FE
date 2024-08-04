import React, { ReactNode } from 'react';

interface TableHeaderModuleProps {
  children: ReactNode;
  bgColor?: string;
}

const TableHeaderModule = ({ children, bgColor = 'bg-white' }: TableHeaderModuleProps) => {
  return (
    <thead className={`sticky left-0 top-0 h-[30px] w-full ${bgColor}`}>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeaderModule;
