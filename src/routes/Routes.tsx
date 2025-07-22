import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "~/routes/AuthStack";
import { Stacks, useRouter } from "~/routes/useRouter";
import { AppStack } from "./AppStack";

const stacks: Record<Stacks, React.ReactElement> = {
  Auth: <AuthStack />,
  App: <AppStack />,
};

export function Router() {
  const stack = useRouter();

  const Stack = stacks[stack];

  return <NavigationContainer>{Stack}</NavigationContainer>;
}
