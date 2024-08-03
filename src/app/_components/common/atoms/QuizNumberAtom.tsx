interface QuizNumberAtomProps {
  number: number;
}

const QuizNumberAtom = ({ number }: QuizNumberAtomProps) => {
  return <span className="text-5xl font-bold">{number.toString().padStart(2, '0')}.</span>;
};

export default QuizNumberAtom;
