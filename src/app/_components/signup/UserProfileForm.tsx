'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginInput from '@/app/_components/common/atoms/LoginInput';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import Image from 'next/image';
import { AddProfileIcon, EmptyProfileIcon } from '@/app/_assets/icons';
import { useSignUpMutation } from '@/app/_api/auth';
import { toast } from 'react-toastify';
import useSignUp from './SignUpContext';
import useCategory from './CategoryContext';
import Loading from '../common/atoms/Loading';

interface UserProfileFormProps {
  pageNum: string;
}

const UserProfileForm = ({ pageNum }: UserProfileFormProps) => {
  const router = useRouter();
  const { req } = useCategory();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [localData, setLocalData] = useState<{
    name: string;
    gender: string;
    profileImage: string;
    year: string;
    month: string;
    day: string;
  }>({
    name: '',
    gender: '',
    profileImage: '',
    year: '',
    month: '',
    day: '',
  });
  const { signUpData } = useSignUp();

  // react-query의 useMutation으로 회원가입 API 호출 처리
  const { mutate: triggerSignUp, status } = useSignUpMutation({
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다.', {
        pauseOnHover: false,
        autoClose: 300, // 0.3초
      });
      // 0.3초 후 페이지 이동
      setTimeout(() => {
        req.accountId = signUpData.accountId;
        router.push(`/signup/${parseInt(pageNum, 10) + 1}`);
      }, 300);
    },
    onError: (error: Error) => {
      toast.error(`회원가입에 실패했습니다: ${error.message}`, {
        pauseOnHover: false,
        autoClose: 3000,
      });
    },
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // signUpData 업데이트
    signUpData.name = localData.name;
    signUpData.gender = localData.gender;
    signUpData.birthday = `${localData.year}-${localData.month}-${localData.day}`;
    signUpData.profileImage = profileImage || '';

    // react-query의 mutate 호출로 회원가입 요청
    triggerSignUp(signUpData);
  };

  // 로딩 상태일 때 Loading 컴포넌트를 반환
  if (status === 'pending') {
    return <Loading />;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onGenderSelect = (gender: string) => {
    setLocalData((prev) => ({
      ...prev,
      gender,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="flex w-full items-center justify-center bg-primary-100">
      <div className="flex h-dvh w-[440px] flex-col items-center justify-center gap-y-6">
        <h1 className="w-full text-h3 font-bold">프로필 설정</h1>
        <form className="flex w-full flex-col gap-y-8" onSubmit={handleSignup}>
          <div className="flex justify-center">
            <div className="relative w-fit justify-center">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="미리 보기"
                  className="h-32 w-32 rounded-full object-cover"
                />
              ) : (
                <Image
                  src={EmptyProfileIcon}
                  alt="profile"
                  className="h-32 w-32 rounded-full object-cover text-gray-300"
                />
              )}
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                htmlFor="profileImage"
                className="absolute bottom-0 right-4 translate-x-2 translate-y-2 transform cursor-pointer"
              >
                <Image src={AddProfileIcon} alt="Add profile" className="h-12 w-12 rounded-full" />
              </label>
            </div>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <div className="flex w-full flex-col gap-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold">이름</p>
            </div>
            <LoginInput
              type="text"
              name="name"
              value={localData.name}
              onChange={onChange}
              placeholder="이름"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold">생년월일</p>
            </div>
            <div className="flex items-center gap-x-2">
              <LoginInput
                type="text"
                name="year"
                value={localData.year}
                onChange={onChange}
                placeholder="년"
              />
              <LoginInput
                type="text"
                name="month"
                value={localData.month}
                onChange={onChange}
                placeholder="월"
              />
              <LoginInput
                type="text"
                name="day"
                value={localData.day}
                onChange={onChange}
                placeholder="일"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold">성별</p>
            </div>
            <div className="flex h-14 w-full">
              <button
                type="button"
                onClick={() => onGenderSelect('MALE')}
                className={`grow rounded-l px-4 py-2 ${
                  localData.gender === 'MALE'
                    ? 'border border-primary bg-primary/20 text-primary'
                    : 'border border-white bg-white text-sub-200'
                }`}
              >
                남자
              </button>
              <button
                type="button"
                onClick={() => onGenderSelect('FEMALE')}
                className={`grow rounded-r px-4 py-2 ${
                  localData.gender === 'FEMALE'
                    ? 'border border-primary bg-primary/20 text-primary'
                    : 'border border-white bg-white text-sub-200'
                }`}
              >
                여자
              </button>
            </div>
          </div>

          <ButtonAtom
            buttonStyle="dark"
            text="다음"
            type="submit"
            width="grow"
            height="56px"
            rounded="rounded"
          />
        </form>
      </div>
    </section>
  );
};

export default UserProfileForm;
