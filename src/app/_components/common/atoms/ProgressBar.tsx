interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200">
      <div className="h-2.5 rounded-full bg-primary" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
