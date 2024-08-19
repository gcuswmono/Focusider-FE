import React, { ReactNode } from 'react';

interface TableHeaderModuleProps {
  children: ReactNode;
}

const TableHeaderModule = ({ children }: TableHeaderModuleProps) => {
  return (
    <thead className="sticky left-0 top-0 h-[30px] w-full">
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeaderModule;
