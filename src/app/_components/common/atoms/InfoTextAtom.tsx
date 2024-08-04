interface InfoTextAtomProps {
  text: string;
  className?: string;
}

const InfoTextAtom = ({ text, className }: InfoTextAtomProps) => {
  return <p className={`flex items-center ${className}`}>{text}</p>;
};

export default InfoTextAtom;
