import React from 'react';
import InfoTextAtom from '@/app/_components/common/atoms/InfoTextAtom';

interface InfoSectionModuleProps {
  title: string;
  content: string;
  titleClassName?: string;
  contentClassName?: string;
}

const InfoSectionModule = ({
  title,
  content,
  titleClassName = '',
  contentClassName = '',
}: InfoSectionModuleProps) => {
  return (
    <div className="flex justify-between">
      <InfoTextAtom text={title} className={`text-3 text-sub-300 ${titleClassName}`} />
      <InfoTextAtom text={content} className={`text-3${contentClassName}`} />
    </div>
  );
};

export default InfoSectionModule;
