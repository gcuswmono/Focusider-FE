import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { signUp, login, add, duplicatedCheck } from './api';
import { SignUpRequestBody, LoginRequestBody, AddRequestBody, DuplicateRequestBody } from './types';
import { BaseResponse } from '../types';

// 회원가입 Mutation
export const useSignUpMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (error: Error) => void;
}) => {
  return useMutation<void, Error, SignUpRequestBody>({
    mutationFn: signUp,
    onSuccess, // 전달받은 onSuccess를 사용
    onError, // 전달받은 onError를 사용
  });
};

// 로그인 Mutation
export const useLoginMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (error: Error) => void;
}) => {
  return useMutation<BaseResponse<void>, Error, LoginRequestBody>({
    mutationFn: login,
    onSuccess,
    onError,
  });
};

// 멤버 카테고리 추가 Mutation
export const useAddCategoryMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (error: Error) => void;
}) => {
  return useMutation<BaseResponse<void>, Error, AddRequestBody>({
    mutationFn: add,
    onSuccess,
    onError,
  });
};

export const useDuplicateCheckMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (isDuplicated: boolean) => void;
  onError: (error: Error) => void;
}) => {
  return useMutation<BaseResponse<{ isDuplicated: boolean }>, Error, DuplicateRequestBody>({
    mutationFn: duplicatedCheck,
    onSuccess: (response) => {
      onSuccess(response.data.isDuplicated); // isDuplicated 값을 넘겨줌
    },
    onError,
  });
};
