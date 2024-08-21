import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

// 인터페이스 정의
interface Req {
  readingTermType: 'EVERYDAY' | 'ONCE_A_WEEK' | 'SOMETIMES' | 'ALMOST_NONE' | null;
  readingHardType: 'OFTEN' | 'SOMETIMES' | 'ALMOST_NONE' | 'NOTHING' | null;
  categoryTypes: Category[];
}

export interface AddArray {
  readingTermType: string | null;
  readingHardType: string | null;
  categoryTypes: Category[] | null;
}

export const transformReqToAddRequestBody = (req: Req): AddArray => {
  return {
    readingTermType: req.readingTermType,
    readingHardType: req.readingHardType,
    categoryTypes: req.categoryTypes,
  };
};

const Categories = [
  'ART',
  'SCIENCE',
  'SOCIETY',
  'TECHNOLOGY',
  'HUMANITIES',
  'AMALGAMATION',
  null,
] as const;

export type Category = (typeof Categories)[number];

interface MemberInfo {
  memberId: number;
  memberLevel: number;
  memberRole: string;
}

interface CategoryContextType {
  req: Req;
  memberInfo: MemberInfo;
  setReq: React.Dispatch<React.SetStateAction<Req>>;
  setMemberInfo: React.Dispatch<React.SetStateAction<MemberInfo>>;
}

// 기본값 설정
const defaultValue: CategoryContextType = {
  req: {
    readingTermType: null,
    readingHardType: null,
    categoryTypes: [null],
  },
  memberInfo: {
    memberId: 0,
    memberLevel: 0,
    memberRole: 'string',
  },
  setReq: () => {},
  setMemberInfo: () => {},
};

// Context 생성
const CategoryContext = createContext<CategoryContextType>(defaultValue);

// Context를 쉽게 사용하기 위한 커스텀 훅
export default function useCategory() {
  return useContext(CategoryContext);
}

interface Props {
  children: ReactNode;
}

// Provider 컴포넌트
export const CategoryProvider = ({ children }: Props) => {
  const [req, setReq] = useState<Req>(defaultValue.req);
  const [memberInfo, setMemberInfo] = useState<MemberInfo>(defaultValue.memberInfo);

  // useMemo로 Context 값을 메모이제이션하여 리렌더링 최적화
  const value = useMemo(() => ({ req, setReq, memberInfo, setMemberInfo }), [req, memberInfo]);

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
