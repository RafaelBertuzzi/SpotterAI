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
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}