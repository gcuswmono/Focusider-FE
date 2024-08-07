import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import Image from 'next/image';

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
        <div className="ml-[144px] mt-[142px]">
          <Image src="profileDefault.svg" alt="profileDefault" height={256} width={236} priority />
        </div>
        <div className="ml-[144px] mt-[60px] h-[420px] w-[570px]">
          <div className="flex h-[44px] flex-col space-y-[50px]">
            {userInfo.map((item) => (
              <div key={item.id} className="flex w-[570px] text-[32px] leading-[44px]">
                <span className="w-[120px] text-gray-500">{item.label}</span>
                <span className="ml-[200px]">{item.value}</span>
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
