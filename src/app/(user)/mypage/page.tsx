import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import Image from 'next/image';
import profileDefault from '@/app/_assets/icons/profileDefault.svg';
import profileEdit from '@/app/_assets/icons/profileEdit.svg';
import InfoSectionModule from '@/app/_components/common/modules/InfoSectionModule';
import { Button } from '@nextui-org/react';

export default function mypage() {
  const userInfo = [
    { id: 'name', label: '이름', value: '김가현' },
    { id: 'userId', label: '아이디', value: 'rrow2o' },
    { id: 'birthDate', label: '생년월일', value: '2001.05.03' },
    { id: 'gender', label: '성별', value: '여성' },
    { id: 'joinDate', label: '가입일', value: '2024.07.27' },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-[74px] h-[1118px] w-[1804px] overflow-hidden">
        <div className="ml-[144px] mt-[16px] text-[48px] leading-[66px]">마이페이지</div>
        <div className="relative ml-[144px] mt-[142px] h-[256px] w-[236px]">
          <div className="absolute left-0 top-0">
            <Image src={profileDefault} alt="profileDefault" height={236} width={236} priority />
          </div>
          <Button
            className="absolute left-[144px] top-[162px] bg-transparent outline-none"
            type="button"
          >
            <Image src={profileEdit} alt="profileEdit" height={90} width={90} priority />
          </Button>
        </div>
        <div className="ml-[144px] mt-[60px] h-[420px] w-[570px]">
          <div className="flex h-[44px] flex-col space-y-[50px]">
            {userInfo.map((item) => (
              <div key={item.id} className="flex w-[570px]">
                <InfoSectionModule
                  title={item.label}
                  titleClassName="w-[120px] text-gray-500 text-[32px] leading-[44px]"
                  content={item.value}
                  contentClassName="ml-[200px] text-[32px] leading-[44px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="ml-[492px] mt-[72px]">
          <ButtonAtom
            buttonStyle="dark"
            text="수정"
            type="button"
            width="144px"
            height="66px"
            fontSize="28px"
          />
        </div>
      </div>
    </div>
  );
}
