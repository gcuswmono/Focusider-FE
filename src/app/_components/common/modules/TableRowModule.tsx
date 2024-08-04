import React, { ReactNode } from 'react';

interface TableRowModuleProps {
  children: ReactNode;
}

const TableRowModule = ({ children }: TableRowModuleProps) => {
  return <tr className="h-[60px]">{children}</tr>;
};

export default TableRowModule;
