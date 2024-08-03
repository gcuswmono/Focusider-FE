import InfoTextAtom from '@/app/_components/common/atoms/InfoTextAtom';
import IconAtom from '@/app/_components/common/atoms/IconAtom';

interface InfoModuleProps {
  text: string;
  src: string;
  alt: string;
}

const InfoModule = ({ text, src, alt }: InfoModuleProps) => {
  return (
    <div className="flex w-fit gap-x-1 rounded-full bg-white px-3 py-1.5">
      <IconAtom src={src} alt={alt} />
      <InfoTextAtom text={text} />
    </div>
  );
};

export default InfoModule;
