import { api } from "~/api";
import { AuthCredentials } from "~/domain/Auth/authTypes";
import { authAdapter } from "./authAdapter";
import { authApi, SignInRequest } from "./authApi";

async function signIn(request: SignInRequest): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(request);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
}

async function logout(): Promise<void> {
  try {
    await authApi.logout();
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const authService = {
  signIn,
  logout,
  updateToken,
};
