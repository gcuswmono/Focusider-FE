import InfoTextAtom from '@/app/_components/common/atoms/InfoTextAtom';
import IconAtom from '../atoms/IconAtom';

interface NavItemModuleProps {
  iconSrcActive: string;
  iconSrcInactive: string;
  iconAlt: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItemModule = ({
  iconSrcActive,
  iconSrcInactive,
  iconAlt,
  text,
  isActive,
  onClick,
}: NavItemModuleProps) => {
  const iconSrc = isActive ? iconSrcActive : iconSrcInactive;

  return (
    <div
      role="presentation"
      className={`flex cursor-pointer items-center gap-x-2 ${
        isActive ? 'text-[#8B73EF]' : 'text-[#AAAAAA]'
      }`}
      onClick={onClick}
    >
      <IconAtom src={iconSrc} alt={iconAlt} width={64} height={64} />
      <InfoTextAtom className="text-[32px]" text={text} />
    </div>
  );
};

export default NavItemModule;
