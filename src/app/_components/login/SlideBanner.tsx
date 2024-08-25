import Image from 'next/image';
import { FirstBannerIcon, SecondBannerIcon, ThirdBannerIcon } from '@/app/_assets/icons';
import React from 'react';

const SlideBanner = () => {
  const images = [
    { id: 1, src: FirstBannerIcon, alt: 'First Banner Icon' },
    { id: 2, src: SecondBannerIcon, alt: 'Second Banner Icon' },
    { id: 3, src: ThirdBannerIcon, alt: 'Third Banner Icon' },
  ];

  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <div className="group flex w-fit overflow-hidden">
        <div
          // prettier-ignore
          className="animate-infiniteSlide flex gap-6 pr-6"
        >
          {[...images, ...images].map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="object-contain"
            />
          ))}
        </div>
      </div>
      <p className="pt-20 text-center text-1 text-sub-300/70">
        읽고, 대화하고, 배우는 즐거운 여정이 <br />
        바로 여기서 시작됩니다 🎉
      </p>
    </main>
  );
};

export default SlideBanner;
