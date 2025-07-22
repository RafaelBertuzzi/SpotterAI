import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "~/routes/AuthStack";

export function useAuthNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  function toSignUp(): void {
    navigation.push("SignUpScreen");
  }

  function back(): void {
    navigation.goBack();
  }

  const navigate = {
    toSignUp,
    back,
  };

  return navigate;
}
