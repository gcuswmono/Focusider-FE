'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginInput from '@/app/_components/common/atoms/LoginInput';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import Image from 'next/image';
import { AddProfileIcon, EmptyProfileIcon } from '@/app/_assets/icons';
import { signUp } from '@/api/auth';
import { toast } from 'react-toastify';
import useSignUp from './SignUpContext';

interface UserProfileFormProps {
  pageNum: string;
}

const UserProfileForm = ({ pageNum }: UserProfileFormProps) => {
  const router = useRouter();
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
  const [error] = useState<{
    name: string | null;
    gender: string | null;
    profileImage: string | null;
    year: string | null;
    month: string | null;
    day: string | null;
  }>({
    name: null,
    gender: null,
    profileImage: null,
    year: null,
    month: null,
    day: null,
  });
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpData.name = localData.name;
    signUpData.gender = localData.gender;
    signUpData.birthday = `${localData.year}-${localData.month}-${localData.day}`;
    signUpData.profileImage = profileImage || '';
    try {
      await signUp(signUpData); // SignUpContext의 데이터를 사용하여 회원가입 요청
      toast.success('회원가입이 완료되었습니다.', {
        pauseOnHover: false,
        autoClose: 1000,
      });
      router.push(`/signup/${parseInt(pageNum, 10) + 1}`);
    } catch (signupError) {
      toast.error(`Sign up failed: ${signupError}`, {
        pauseOnHover: false,
        autoClose: 1000,
      });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(localData);
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
              error={error.name}
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
                error={error.year}
                placeholderRight
              />
              <LoginInput
                type="text"
                name="month"
                value={localData.month}
                onChange={onChange}
                placeholder="월"
                error={error.month}
                placeholderRight
              />
              <LoginInput
                type="text"
                name="day"
                value={localData.day}
                onChange={onChange}
                placeholder="일"
                error={error.day}
                placeholderRight
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
                onClick={() => onGenderSelect('male')}
                className={`grow rounded-l px-4 py-2 ${localData.gender === 'male' ? 'border border-primary bg-primary/20 text-primary' : 'border border-white bg-white text-sub-200'}`}
              >
                남자
              </button>
              <button
                type="button"
                onClick={() => onGenderSelect('female')}
                className={`grow rounded-r px-4 py-2 ${localData.gender === 'female' ? 'border border-primary bg-primary/20 text-primary' : 'border border-white bg-white text-sub-200'}`}
              >
                여자
              </button>
            </div>
            {error.gender && <span className="text-sm text-negative">{error.gender}</span>}
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
