import Image from 'next/image';
import { CheckedRadioButton, UncheckedRadioButton } from '@/app/_assets/icons';

interface RadioButtonAtomProps {
  isChecked: boolean;
}

const RadioButtonAtom = ({ isChecked }: RadioButtonAtomProps) => {
  return (
    <div>
      <Image
        src={isChecked ? CheckedRadioButton : UncheckedRadioButton}
        alt={isChecked ? 'checked' : 'unchecked'}
      />
    </div>
  );
};

export default RadioButtonAtom;
