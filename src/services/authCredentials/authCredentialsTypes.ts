import { AuthCredentials } from "~/domain/Auth";
import { User } from "~/domain/User";

export interface IAuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  loadCredentials: () => Promise<void>;
  updateUser: (user: User) => void;
  isLoading: boolean;
}
