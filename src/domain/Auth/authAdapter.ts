import { userAdapter } from "~/domain/User";
import { AuthCredentials, AuthCredentialsAPI } from "./authTypes";

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI
): AuthCredentials {
  return {
    accessToken: authCredentialsAPI.tokens.access_token,
    refreshToken: authCredentialsAPI.tokens.refresh_token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = { toAuthCredentials };
