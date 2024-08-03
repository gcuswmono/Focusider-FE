interface QuizOptionAtomProps {
  text: string;
}

const QuizOptionAtom = ({ text }: QuizOptionAtomProps) => {
  return <p className="text-1 font-semibold">{text}</p>;
};

export default QuizOptionAtom;
