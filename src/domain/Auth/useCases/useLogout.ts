import { MutationOptions, useMutation } from "@tanstack/react-query";
import { useAuthCredentials } from "~/services/authCredentials";
import { authService } from "../authService";

export function useLogout(
  options?: MutationOptions<void, Error, void, unknown>
) {
  const { removeCredentials } = useAuthCredentials();

  const mutation = useMutation<void, Error, void>({
    mutationFn: () => authService.logout(),
    retry: false,
    onError: (error, variables, context) => {
      removeCredentials();
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    onSuccess: (data, variables, context) => {
      removeCredentials();
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });

  return {
    logout: () => mutation.mutate(),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
