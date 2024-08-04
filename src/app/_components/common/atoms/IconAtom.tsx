import Image from 'next/image';

interface IconAtomProps {
  src: string;
  alt: string;
  className?: string;
}

const IconAtom = ({ src, alt, className = '' }: IconAtomProps) => {
  return <Image src={src} alt={alt} className={className} />;
};

export default IconAtom;
