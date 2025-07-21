import { MutationOptions, useMutation } from "@tanstack/react-query";
import { useAuthCredentials } from "~/services/authCredentials";
import { authService } from "../authService";
import { AuthCredentials } from "../authTypes";

interface Variables {
  email: string;
  password: string;
}

export function useLogin(
  options?: MutationOptions<AuthCredentials, Error, Variables, unknown>
) {
  const { saveCredentials } = useAuthCredentials();

  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password }) =>
      authService.signIn({ email, password }),
    retry: false,
    onError: (error, variables, context) => {
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    onSuccess: (authCredentials, variables, context) => {
      saveCredentials(authCredentials);
      if (options?.onSuccess) {
        options.onSuccess(authCredentials, variables, context);
      }
    },
  });

  return {
    login: (variables: Variables) => mutation.mutate(variables),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  };
}
