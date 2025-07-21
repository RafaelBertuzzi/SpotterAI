import { create } from "zustand";
import { queryClient } from "~/App";
import { AuthCredentials, authService } from "~/domain/Auth";
import { User } from "~/domain/User";
import { authCredentialsStorage } from "~/services/authCredentials/authCredentialsStorage";
import { IAuthCredentialsService } from "~/services/authCredentials/authCredentialsTypes";
import { storeReset } from "~/services/store/storeReset";

export const useAuthCredentials = create<IAuthCredentialsService>((set) => ({
  authCredentials: null,
  isLoading: true,

  saveCredentials: async (authCredentials: AuthCredentials) => {
    await authCredentialsStorage.set(authCredentials);
    authService.updateToken(authCredentials.accessToken);

    // Clear React Query cache to fetch fresh data for the logged-in user
    queryClient.clear();

    // Reset all stores
    storeReset.resetAllStores();

    set({ authCredentials });
  },

  removeCredentials: async () => {
    // Clear stored credentials
    await authCredentialsStorage.remove();

    // Clear API token
    authService.updateToken("");

    // Clear React Query cache to remove all cached user data
    queryClient.clear();

    // Clear all user-related Zustand stores
    storeReset.resetAllStores();

    // Reset Zustand store state
    set({ authCredentials: null });
  },

  updateUser: (user: User) => {
    set((state) => {
      if (!state.authCredentials) return state;
      return {
        authCredentials: { ...state.authCredentials, user },
        userId: user.id,
      };
    });
  },

  loadCredentials: async () => {
    const storedCredentials = await authCredentialsStorage.get();
    authService.updateToken(storedCredentials?.accessToken || "");
    set({
      authCredentials: storedCredentials,
      isLoading: false,
    });
  },
}));
