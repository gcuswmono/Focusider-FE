import { ReactNode } from 'react';
import InfoTextAtom from '@/app/_components/common/atoms/InfoTextAtom';
import InfoModule from '@/app/_components/common/modules/InfoModule';

interface CardContainerProps {
  title: string;
  subtitle?: string;
  infoModuleSrc?: string;
  infoModuleAlt?: string;
  infoModuleText?: string;
  children?: ReactNode;
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
}

const CardContainer = ({
  title,
  subtitle,
  infoModuleSrc,
  infoModuleAlt,
  infoModuleText,
  children,
  backgroundColor,
  titleColor,
  subtitleColor,
}: CardContainerProps) => {
  return (
    <div className={`w-[440px] rounded-[20px] p-4 ${backgroundColor}`}>
      <div className="mb-4 flex items-start justify-between">
        <div className="flex flex-col items-start">
          <InfoTextAtom text={title} className={`text-2xl font-bold ${titleColor}`} />
          {subtitle && <InfoTextAtom text={subtitle} className={`text-5 ${subtitleColor}`} />}
        </div>
        {infoModuleSrc && infoModuleAlt && infoModuleText && (
          <InfoModule src={infoModuleSrc} alt={infoModuleAlt} text={infoModuleText} />
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardContainer;
