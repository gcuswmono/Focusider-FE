import Image from 'next/image';
import review_icon from '@/app/_assets/icons/review_icon.svg';
import { v4 as uuidv4 } from 'uuid';

export default function review() {
  const reviewInfo = [
    {
      id: '1',
      level: '⭐',
      category: ['사자성어', '어휘력', '키워드를 적자 !!'],
      studyAt: '2024.07.03',
      restudyAt: '',
      status: true,
    },
    {
      id: '2',
      level: '⭐⭐',
      category: ['사자성어', '어휘력', '키워드를 적자 !!'],
      studyAt: '2024.07.03',
      restudyAt: '',
      status: false,
    },
    {
      id: '3',
      level: '⭐⭐⭐',
      category: ['사자성어', '어휘력', '키워드를 적자 !!'],
      studyAt: '2024.07.03',
      restudyAt: '',
      status: true,
    },
    {
      id: '4',
      level: '⭐⭐',
      category: ['사자성어', '어휘력', '키워드를 적자 !!'],
      studyAt: '2024.07.03',
      restudyAt: '',
      status: true,
    },
    {
      id: '5',
      level: '⭐',
      category: ['사자성어', '어휘력', '키워드를 적자 !!'],
      studyAt: '2024.07.03',
      restudyAt: '',
      status: true,
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-[74px] h-[1118px] w-[1804px] border border-solid">
        <div className="ml-6 flex">
          <Image src={review_icon} alt="review_icon" width={92} height={92} />
          <div className="ml-[22px] mt-4 text-[48px] font-bold leading-[66px]">오답노트</div>
          <div className="ml-[700px] mt-[22px] text-[28px] leading-[39px] text-gray-300">
            오답 노트의 중요성을 강조하는 문구를 한 줄 정도 넣으면 괜찮을지도
          </div>
        </div>
        <div className="relative mt-[102px] box-border flex w-full flex-row items-center justify-start gap-[56px] px-10 text-center font-['Noto_Sans'] text-[28px] text-[#5c5c5c]">
          <div className="relative flex w-[60px] flex-shrink-0 items-center text-left">번호</div>
          <div className="relative flex w-[160px] flex-shrink-0 items-center justify-center">
            난이도
          </div>
          <div className="relative flex w-[660px] flex-shrink-0 items-center justify-center">
            분류
          </div>
          <div className="relative flex w-[200px] flex-shrink-0 items-center justify-center">
            학습일
          </div>
          <div className="relative flex w-[200px] flex-shrink-0 items-center justify-center">
            재학습일
          </div>
          <div className="relative flex w-[168px] flex-shrink-0 items-center justify-center text-[26px] leading-[28px]">{` `}</div>
        </div>
        {reviewInfo.map((item) => (
          <div
            key={item.id}
            className="relative mt-[30px] box-border flex w-full flex-row items-center justify-start gap-[56px] px-10 text-center font-['Noto_Sans'] text-[28px] text-[#5c5c5c]"
          >
            <div className="relative flex w-[60px] flex-shrink-0 justify-center">{item.id}</div>
            <div className="relative flex w-[160px] flex-shrink-0 items-center justify-center">
              {item.level}
            </div>
            <div className="relative flex w-[660px] flex-shrink-0 items-center justify-center gap-2">
              {item.category.map((cat) => (
                <div
                  key={uuidv4()}
                  className="whitespace-nowrap rounded-md bg-[#F5F6F8] px-[9px] py-[8px] text-[24px] leading-[32px] text-[#5c5c5c]"
                >
                  {cat}
                </div>
              ))}
            </div>
            <div className="relative flex w-[200px] flex-shrink-0 items-center justify-center">
              {item.studyAt}
            </div>
            <div className="relative flex w-[200px] flex-shrink-0 items-center justify-center">
              {item.restudyAt}
            </div>
            <div className="relative flex w-[168px] flex-shrink-0 items-center justify-center text-[26px] leading-[28px]">{` `}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
