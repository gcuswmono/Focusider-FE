interface QuizTitleAtomProps {
  title: string;
}

const QuizTitleAtom = ({ title }: QuizTitleAtomProps) => {
  return <span className="text-h3 font-bold">{title}</span>;
};

export default QuizTitleAtom;
