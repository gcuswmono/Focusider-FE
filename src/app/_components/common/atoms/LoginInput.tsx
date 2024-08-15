import Image from 'next/image';
import { ErrorIcon } from '@/app/_assets/icons';

interface UserLoginInputProps {
  type: 'text' | 'password';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: string | null;
  showDuplicateCheck?: boolean;
  onDuplicateCheckClick?: () => void;
}

const LoginInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  showDuplicateCheck = false,
  onDuplicateCheckClick,
}: UserLoginInputProps) => {
  return (
    <div className="flex w-full flex-col">
      <div
        className={`flex h-14 w-full items-center gap-x-2.5 rounded bg-white ${
          error ? 'border-2 border-negative' : ''
        } px-5 py-2.5`}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="h-full grow text-sub-400 outline-none placeholder:text-sub-200"
          placeholder={placeholder}
        />
        {showDuplicateCheck && (
          <button
            type="button"
            onClick={onDuplicateCheckClick}
            className="rounded-md border border-sub-200/50 px-3 py-1.5 text-4 text-sub-200"
          >
            중복확인
          </button>
        )}
      </div>
      <span className="flex items-center gap-x-0.5 text-sm leading-7 text-negative">
        {error && (
          <>
            <Image src={ErrorIcon} alt="Error" />
            <span>{error}</span>
          </>
        )}
      </span>
    </div>
  );
};

export default LoginInput;
