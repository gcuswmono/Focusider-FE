interface InfoTextAtomProps {
  text: string;
}

const InfoTextAtom = ({ text }: InfoTextAtomProps) => {
  return <p className="flex items-center text-4 font-semibold">{text}</p>;
};

export default InfoTextAtom;
