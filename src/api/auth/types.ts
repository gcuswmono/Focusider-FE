export interface SignUpRequestBody {
  accountId: string;
  password: string;
  name: string;
  gender: string;
  birthday: string;
  profileImage: string;
}

export interface LoginRequestBody {
  accountId: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  role: string;
}
