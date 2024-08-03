import Image from 'next/image';

interface ModalIconAtomProps {
  src: string;
  alt: string;
}

const ModalIconAtom = ({ src, alt }: ModalIconAtomProps) => {
  return <Image src={src} alt={alt} />;
};

export default ModalIconAtom;
