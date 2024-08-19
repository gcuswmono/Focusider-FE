'use client';

import React, { ReactNode, useState } from 'react';
import FontSizeControllerAtom from '@/app/_components/common/atoms/FontSizeControllerAtom';
import { DensityLargeIcon, PlusMathIcon } from '@/app/_assets/icons';
import Image from 'next/image';

interface FontSizeControllerProps {
  title: string;
  initialSize: number;
  children: ReactNode;
}

const FontSizeControllerModule = ({ title, initialSize, children }: FontSizeControllerProps) => {
  const [fontSize, setFontSize] = useState(initialSize);

  const increaseFontSize = () => setFontSize((prevSize) => prevSize + 2);
  const decreaseFontSize = () => setFontSize((prevSize) => prevSize - 2);

  return (
    <div className="flex w-full flex-col px-10">
      <div className="flex justify-between">
        <p className="text-h4 font-semibold">{title}</p>
        <div className="mb-2 flex justify-end">
          <FontSizeControllerAtom className="rounded-l-md border-r-0" onClick={increaseFontSize}>
            <Image src={PlusMathIcon} alt="Increase Font Size" />
          </FontSizeControllerAtom>
          <FontSizeControllerAtom className="rounded-r-md" onClick={decreaseFontSize}>
            <Image src={DensityLargeIcon} alt="Decrease Font Size" />
          </FontSizeControllerAtom>
        </div>
      </div>

      <div style={{ fontSize: `${fontSize}px` }}>{children}</div>
    </div>
  );
};

export default FontSizeControllerModule;
