'use client';

import SubtitleModule from '@/app/_components/common/modules/SubtitleModule';
import { AddProfileIcon, CloseIcon, EmptyProfileIcon, MypageIcon } from '@/app/_assets/icons';
import Image from 'next/image';
import InfoSectionModule from '@/app/_components/common/modules/InfoSectionModule';
import { useGetMemberInfoQuery } from '@/app/_api/member/useGetMemberInfoQuery';
import Loading from '@/app/_components/common/atoms/Loading';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ButtonAtom from '@/app/_components/common/atoms/ButtonAtom';
import { usePostFileMutation } from '@/app/_api/member/usePostFileMutation';
import { usePatchMemberInfoMutation } from '@/app/_api/member/usePatchMemberInfoMutation';

const MyPage = () => {
  const { data, isLoading, isError } = useGetMemberInfoQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedProfileImageUrl, setEditedProfileImageUrl] = useState('');

  useEffect(() => {
    if (data) {
      setEditedName(data.name);
      setEditedProfileImageUrl(data.profileImageUrl || EmptyProfileIcon);
    }
  }, [data]);

  const successCallback = (imageUrl: string) => {
    setEditedProfileImageUrl(imageUrl);
  };

  const errorCallback = (error: Error) => {
    console.error('프로필 이미지 업로드 실패:', error);
  };

  const { mutate: uploadFile } = usePostFileMutation({
    successCallback,
    errorCallback,
  });

  const { mutate: patchMemberInfo } = usePatchMemberInfoMutation({
    successCallback: () => {
      setIsModalOpen(false);
    },
    errorCallback: (error) => {
      console.error('Failed to update member info:', error);
    },
  });

  if (isLoading) return <Loading />;
  if (isError || !data) return <p>error</p>;

  const formattedBirthDay = format(new Date(data.birthDay), 'yyyy.MM.dd');
  const formattedCreatedAt = format(new Date(data.createdAt), 'yyyy.MM.dd');
  const formattedGender = data.memberGenderType === 'FEMALE' ? '여성' : '남성';

  const handleNameChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEditedName(e.target.value);
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadFile({ file });
    }
  };

  const saveProfileChanges = () => {
    patchMemberInfo({
      name: editedName,
      profileImageUrl: editedProfileImageUrl,
    });
  };

  return (
    <section className="flex h-full items-center justify-center">
      <div className="w-[1080px]">
        <div className="">
          <SubtitleModule iconSrc={MypageIcon} iconAlt="archive" title="마이페이지" />

          <div className="w-full py-10 pl-16">
            <div className="relative inline-block">
              <Image
                src={editedProfileImageUrl || EmptyProfileIcon}
                alt="profileDefault"
                width={100}
                height={100}
                className="h-28 w-28 rounded-full object-cover"
              />
              <button className="absolute -bottom-2 -right-2" type="button">
                <Image src={AddProfileIcon} alt="profileEdit" />
              </button>
            </div>
          </div>

          <div className="flex w-[330px] flex-col gap-y-6 pl-16 pt-4">
            <InfoSectionModule title="이름" content={data.name} />
            <InfoSectionModule title="아이디" content={data.accountId} />
            <InfoSectionModule title="생년월일" content={formattedBirthDay} />
            <InfoSectionModule title="성별" content={formattedGender} />
            <InfoSectionModule title="가입일" content={formattedCreatedAt} />
            <div className="mt-4 flex justify-end">
              <ButtonAtom
                buttonStyle="dark"
                text="수정"
                type="button"
                width="72px"
                height="34px"
                fontSize="14px"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-[400px] w-[500px] rounded-lg bg-primary-100 p-6">
            <button className="absolute right-6 top-6" onClick={() => setIsModalOpen(false)}>
              <Image src={CloseIcon} alt="Close" />
            </button>

            <div className="mb-4 flex h-full flex-col items-center justify-center gap-y-6">
              <div className="flex w-full justify-center">
                <div className="relative inline-block">
                  <Image
                    src={editedProfileImageUrl || EmptyProfileIcon}
                    alt="profileDefault"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] rounded-full object-cover"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileImageChange}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                  <button className="absolute -bottom-2 -right-2" type="button">
                    <Image src={AddProfileIcon} alt="profileEdit" />
                  </button>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-center">
                <input
                  type="text"
                  value={editedName}
                  onChange={handleNameChange}
                  className="focus:none w-36 border-b border-b-primary bg-transparent px-3 py-2 text-center focus:outline-none"
                />
              </div>

              <div className="flex gap-x-1.5">
                <ButtonAtom
                  buttonStyle="light"
                  text="취소"
                  type="button"
                  width="96px"
                  rounded="rounded"
                  onClick={() => setIsModalOpen(false)}
                />
                <ButtonAtom
                  buttonStyle="dark"
                  text="저장"
                  type="button"
                  width="96px"
                  rounded="rounded"
                  onClick={saveProfileChanges}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyPage;
