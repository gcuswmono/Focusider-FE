'use client';

import React, { ReactNode, useState } from 'react';
import FontSizeControllerAtom from '@/app/_components/common/atoms/FontSizeControllerAtom';
import { DensityLargeIcon, PlusMathIcon } from '@/app/_assets/icons';
import Image from 'next/image';

interface FontSizeControllerProps {
  initialSize: number;
  children: ReactNode;
}

const FontSizeControllerModule: React.FC<FontSizeControllerProps> = ({ initialSize, children }) => {
  const [fontSize, setFontSize] = useState(initialSize);

  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize - 2);

  return (
    <div className="flex w-full items-center justify-between p-4">
      <div className="" style={{ fontSize: `${fontSize}px` }}>
        {children}
      </div>
      <div className="mt-4 flex">
        <FontSizeControllerAtom className="rounded-l-md border-r-0" onClick={increaseFontSize}>
          <Image src={PlusMathIcon} alt="+" />
        </FontSizeControllerAtom>
        <FontSizeControllerAtom className="rounded-r-md" onClick={decreaseFontSize}>
          <Image src={DensityLargeIcon} alt="-" />
        </FontSizeControllerAtom>
      </div>
    </div>
  );
};

export default FontSizeControllerModule;
