import { userAdapter } from "~/domain/User";
import {
  AuthCredentials,
  AuthCredentialsAPI,
  ITokens,
  ITokensAPI,
} from "./authTypes";

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI
): AuthCredentials {
  return {
    accessToken: authCredentialsAPI.tokens.accessToken,
    refreshToken: authCredentialsAPI.tokens.refreshToken,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

function toTokens(tokensAPI: ITokensAPI): ITokens {
  return {
    accessToken: tokensAPI.accessToken,
    refreshToken: tokensAPI.refreshToken,
    expiresIn: tokensAPI.expiresIn,
  };
}

export const authAdapter = { toAuthCredentials, toTokens };
