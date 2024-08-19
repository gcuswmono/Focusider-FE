import { BaseResponse, http } from '@/api'; // http 파일의 경로에 맞게 수정하세요
import { SignUpRequestBody, LoginRequestBody, AuthResponse } from './types';

export const signUp = async (data: SignUpRequestBody): Promise<void> => {
  await http.post<BaseResponse<void>>({
    url: '/api/auth/signup',
    data,
  });
};

export const login = async (data: LoginRequestBody): Promise<void> => {
  await http.post<BaseResponse<void>>({
    url: '/api/auth/login',
    data,
  });
};
