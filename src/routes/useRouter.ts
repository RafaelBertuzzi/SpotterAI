import { useEffect } from "react";
import { useAuthCredentials } from "~/services/authCredentials";

export type Stacks = "Auth" | "App";

export function useRouter(): Stacks {
  const { authCredentials, loadCredentials } = useAuthCredentials();

  useEffect(() => {
    loadCredentials();
  }, [loadCredentials]);

  if (!authCredentials) {
    return "Auth";
  }

  return "App";
}
