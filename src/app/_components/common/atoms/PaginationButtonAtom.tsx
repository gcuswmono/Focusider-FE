interface ButtonProps {
  onPage?: boolean;
  page: number;
  onClick: () => void;
  disabled?: boolean;
}

const PaginationButtonAtom = ({ onPage = false, page, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flex h-12 w-12 items-center justify-center text-4 ${disabled ? 'cursor-not-allowed text-sub-200' : ''}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full ${onPage ? 'bg-primary text-white' : 'text-cus-300'}`}
      >
        {page}
      </div>
    </button>
  );
};

export default PaginationButtonAtom;
