import Image from 'next/image';

interface IconAtomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const IconAtom = ({ src, alt, width, height, className = '' }: IconAtomProps) => {
  return <Image src={src} alt={alt} width={width} height={height} className={className} priority />;
};

export default IconAtom;
