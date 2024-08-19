import QuizOptionAtom from '@/app/_components/common/atoms/QuizOptionAtom';
import RadioButtonAtom from '@/app/_components/common/atoms/RadioButtonAtom';

interface QuizOptionModuleProps {
  text: string;
  isChecked: boolean;
  onClick: () => void;
}

const QuizOptionModule = ({ text, isChecked, onClick }: QuizOptionModuleProps) => {
  return (
    <div role="presentation" className="mb-5 flex items-center space-x-5" onClick={onClick}>
      <RadioButtonAtom isChecked={isChecked} />
      <QuizOptionAtom text={text} />
    </div>
  );
};

export default QuizOptionModule;
