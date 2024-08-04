interface QuizAnswerTextAtomProps {
  text: string;
  className?: string;
}

const TextAtom = ({ text, className = '' }: QuizAnswerTextAtomProps) => {
  return <span className={`${className} text-1 font-semibold`}>{text}</span>;
};

export default TextAtom;
