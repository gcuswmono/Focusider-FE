import { ReactNode } from 'react';

interface TableContainerProps {
  children: ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <div className="flex w-full flex-col overflow-y-auto">
      <table className="min-w-full table-fixed border-separate border-spacing-y-2.5">
        {children}
      </table>
    </div>
  );
};

export default TableContainer;
