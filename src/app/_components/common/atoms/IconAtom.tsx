import Image from 'next/image';

interface IconAtomProps {
  src: string;
  alt: string;
}

const IconAtom = ({ src, alt }: IconAtomProps) => {
  return <Image src={src} alt={alt} />;
};

export default IconAtom;
