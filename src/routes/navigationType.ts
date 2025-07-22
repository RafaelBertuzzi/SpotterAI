import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppTabBottomTabParamList } from "~/routes/AppTabNavigator";
import { AppStackParamList } from "./AppStack";
import { AuthStackParamList } from "./AuthStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList
> = NativeStackScreenProps<AppTabBottomTabParamList, RouteName>;
