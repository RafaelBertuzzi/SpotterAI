import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({ initialRouteName = "AppTabNavigator" }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    </Stack.Navigator>
  );
}
