import React from 'react';
import ModalTitleAtom from '@/app/_components/common/atoms/ModalTitleAtom';
import ModalIconAtom from '@/app/_components/common/atoms/ModaliconAtom';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import ModalSubtitleAtom from '@/app/_components/common/atoms/ModalSubtitleAtom';

interface ButtonProps {
  buttonStyle: 'light' | 'dark';
  onClick?: () => void;
  text: string;
  type: 'button' | 'submit';
  width?: 'fixed' | 'grow';
}

interface ModalModuleProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  subtitle?: string;
  buttonProps?: {
    primary: ButtonProps;
    secondary?: ButtonProps;
  };
}

const ModalModule = ({ iconSrc, iconAlt, title, subtitle, buttonProps }: ModalModuleProps) => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black/30">
      <form className="rounded-regular bg-primary-100 relative flex w-[500px] flex-col items-center gap-4 rounded-2xl p-10 text-center">
        <ModalIconAtom src={iconSrc} alt={iconAlt} />
        <ModalTitleAtom title={title} />
        {subtitle && <ModalSubtitleAtom subtitle={subtitle} />}
        {buttonProps && (
          <div className="flex justify-center space-x-4">
            <ButtonAtom
              buttonStyle={buttonProps.primary.buttonStyle}
              text={buttonProps.primary.text}
              onClick={buttonProps.primary.onClick}
              type={buttonProps.primary.type}
              width={buttonProps.primary.width}
            />
            {buttonProps.secondary && (
              <ButtonAtom
                buttonStyle={buttonProps.secondary.buttonStyle}
                text={buttonProps.secondary.text}
                onClick={buttonProps.secondary.onClick}
                type={buttonProps.secondary.type}
                width={buttonProps.secondary.width}
              />
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ModalModule;
