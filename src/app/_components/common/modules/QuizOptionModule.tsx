import QuizOptionAtom from '@/app/_components/common/atoms/QuizOptionAtom';
import RadioButtonAtom from '@/app/_components/common/atoms/RadioButtonAtom';

interface QuizOptionModuleProps {
  text: string;
  isChecked: boolean;
}

const QuizOptionModule = ({ text, isChecked }: QuizOptionModuleProps) => {
  return (
    <div className="flex items-center space-x-5">
      <RadioButtonAtom isChecked={isChecked} />
      <QuizOptionAtom text={text} />
    </div>
  );
};

export default QuizOptionModule;
