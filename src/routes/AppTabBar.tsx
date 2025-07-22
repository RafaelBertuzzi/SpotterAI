import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Platform, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Column, Row, Text } from "~/components";
import { AppTabBottomTabParamList } from "~/routes/AppTabNavigator";
import { mapScreenToProps } from "~/routes/mapScreenToProps";
import { Colors } from "~/theme/colors";

export function AppTabBar({ state, navigation }: BottomTabBarProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <Row
      paddingBottom={Platform.OS === "ios" ? bottom : bottom + 8}
      justifyContent="space-around"
      borderTopWidth={0.25}
      borderTopColor={Colors.neutral_400}
      paddingTop={12}
      backgroundColor="white"
    >
      {state.routes.map((route, index) => {
        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate({
            name: route.name,
            params: route.params,
            merge: true,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            onPress={onPress}
            activeOpacity={0.8}
          >
            <Column alignItems="center">
              <Ionicons
                color={isFocused ? Colors.primary : Colors.neutral_250}
                size={24}
                name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              />
              <Text
                semiBold
                paddingTop={4}
                color={isFocused ? "primary" : "neutral_250"}
              >
                {tabItem.label}
              </Text>
            </Column>
          </TouchableOpacity>
        );
      })}
    </Row>
  );
}
