import { User, UserAPI } from "../User";

export interface AuthCredentials {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthCredentialsAPI {
  tokens: ITokensAPI;
  user: UserAPI;
}

export interface ITokensAPI {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}