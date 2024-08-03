import QuizTitleAtom from '@/app/_components/common/atoms/QuizTitleAtom';
import QuizNumberAtom from '@/app/_components/common/atoms/QuizNumberAtom';

interface QuizHeaderProps {
  number: number;
  title: string;
}

const QuizHeaderModule = ({ number, title }: QuizHeaderProps) => {
  return (
    <div className="flex flex-col gap-y-2 bg-primary-200">
      <QuizNumberAtom number={number} />
      <QuizTitleAtom title={title} />
    </div>
  );
};

export default QuizHeaderModule;
