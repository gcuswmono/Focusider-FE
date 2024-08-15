import Image from 'next/image';
import { ErrorIcon } from '@/app/_assets/icons';

interface UserLoginInputProps {
  type: 'text' | 'pwd';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: string | null;
}

const LoginInput = ({ type, name, value, onChange, placeholder, error }: UserLoginInputProps) => {
  return (
    <div className="flex w-full flex-col">
      <div
        className={`flex h-14 w-full items-center gap-x-2.5 rounded bg-white ${error ? 'border-2 border-negative' : ''} px-5 py-2.5`}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="h-full grow text-sub-400 outline-none placeholder:text-sub-200"
          placeholder={placeholder}
        />
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
