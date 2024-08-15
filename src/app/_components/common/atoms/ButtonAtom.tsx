import { Button } from '@nextui-org/react';

interface ButtonProps {
  buttonStyle: 'light' | 'dark';
  onClick?: () => void;
  text: string;
  type: 'button' | 'submit';
  width?: 'fixed' | 'grow' | string;
  height?: string;
  fontSize?: string;
  rounded?: 'full' | 'rounded';
}

const getButtonType = (buttonStyle: 'light' | 'dark'): string => {
  switch (buttonStyle) {
    case 'light':
      return 'bg-primary-200 text-primary';
    case 'dark':
      return 'bg-primary text-white';
    default:
      return 'dark';
  }
};

const getWidthClasses = (width: 'fixed' | 'grow' | string | undefined): string => {
  switch (width) {
    case 'fixed':
      return 'w-28';
    case 'grow':
      return 'grow';
    default:
      return width && !['fixed', 'grow'].includes(width) ? `w-[${width}]` : '';
  }
};

const getRoundedClasses = (rounded: 'full' | 'rounded' | undefined): string => {
  switch (rounded) {
    case 'full':
      return 'rounded-full';
    case 'rounded':
      return 'rounded';
    default:
      return 'rounded-full';
  }
};

const ButtonAtom = ({
  buttonStyle,
  text,
  onClick,
  type,
  width,
  height,
  fontSize,
  rounded,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center text-4 px-3.5 font-semibold';
  const widthClasses = getWidthClasses(width);
  const buttonTypeClasses = getButtonType(buttonStyle);
  const roundedClasses = getRoundedClasses(rounded);

  return (
    <Button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${widthClasses} ${buttonTypeClasses} ${roundedClasses}`}
      style={{
        ...(width && !['fixed', 'grow'].includes(width) ? { width } : {}),
        ...(height ? { height } : {}),
        ...(fontSize ? { fontSize } : {}),
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonAtom;
