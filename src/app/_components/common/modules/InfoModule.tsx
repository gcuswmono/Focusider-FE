import InfoTextAtom from '@/app/_components/common/atoms/InfoTextAtom';
import IconAtom from '@/app/_components/common/atoms/IconAtom';

interface InfoModuleProps {
  text: string;
  src: string;
  alt: string;
}

const InfoModule = ({ text, src, alt }: InfoModuleProps) => {
  return (
    <div className="flex w-fit items-center gap-x-1 rounded-full bg-white px-3.5 py-1.5">
      <IconAtom src={src} alt={alt} className="h-5 w-5" />
      <InfoTextAtom text={text} className="text-4 font-semibold" />
    </div>
  );
};

export default InfoModule;
