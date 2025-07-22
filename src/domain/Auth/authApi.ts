import { AuthCredentialsAPI } from "~/domain/Auth/authTypes";

export interface SignInRequest {
  email: string;
  password: string;
}

async function signIn(request: SignInRequest): Promise<AuthCredentialsAPI> {
  await new Promise((r) => setTimeout(r, 1000));

  if (request.email !== "test@example.com" || request.password !== "123456") {
    throw new Error("Invalid email or password");
  }

  return {
    tokens: {
      access_token: "accessToken",
      refresh_token: "refreshToken",
      expires_in: 1000,
    },
    user: {
      id: "1",
      email: "test@example.com",
      first_name: "Test",
      last_name: "User",
      profile_picture: "https://via.placeholder.com/150",
    },
  };
}

async function logout(): Promise<void> {
  await new Promise((r) => setTimeout(r, 1000));
}

export interface SignUpRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

async function signUp(request: SignUpRequest): Promise<AuthCredentialsAPI> {
  await new Promise((r) => setTimeout(r, 1000));

  return {
    tokens: {
      access_token: "accessToken",
      refresh_token: "refreshToken",
      expires_in: 1000,
    },
    user: {
      id: "1",
      email: request.email,
      first_name: request.firstName,
      last_name: request.lastName,
      profile_picture: "",
    },
  };
}

export const authApi = {
  signIn,
  logout,
  signUp,
};
