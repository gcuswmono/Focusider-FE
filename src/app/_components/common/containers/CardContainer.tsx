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
  size: 'large' | 'small';
  onClick: () => void;
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
  size,
  onClick,
}: CardContainerProps) => {
  const cardHeight = size === 'large' ? 'h-[484px]' : 'h-[233px]';

  return (
    <div
      role="presentation"
      className={`w-[460px] rounded-[20px] p-7 ${backgroundColor} ${cardHeight}`}
      onClick={onClick}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex flex-col items-start">
          <InfoTextAtom text={title} className={`text-h4 font-semibold ${titleColor}`} />
          {subtitle && (
            <InfoTextAtom
              text={subtitle}
              className={`mt-0.5 whitespace-pre-line pl-0.5 text-4 ${subtitleColor}`}
            />
          )}
        </div>
        {infoModuleSrc && infoModuleAlt && infoModuleText && (
          <InfoModule src={infoModuleSrc} alt={infoModuleAlt} text={infoModuleText} />
        )}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default CardContainer;
