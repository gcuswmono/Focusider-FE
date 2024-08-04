import React from 'react';
import InfoTextAtom from '@/app/_components/common/atoms/InfoTextAtom';
import IconAtom from '@/app/_components/common/atoms/IconAtom';

interface SubtitleModuleProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description?: string;
}

const SubtitleModule = ({ iconSrc, iconAlt, title, description }: SubtitleModuleProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-200/70 blur-md" />
        <div className="relative flex items-center justify-center">
          <IconAtom src={iconSrc} alt={iconAlt} width={48} height={48} className="h-12 w-12" />
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <InfoTextAtom text={title} className="text-2xl font-bold" />
        {description && <InfoTextAtom text={description} className="text-4 text-sub-300" />}
      </div>
    </div>
  );
};

export default SubtitleModule;
