import { Ionicons } from "@expo/vector-icons";
import { AppTabBottomTabParamList } from "~/routes/AppTabNavigator";

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: keyof typeof Ionicons.glyphMap;
      unfocused: keyof typeof Ionicons.glyphMap;
    };
  }
> = {
  FlightsScreen: {
    label: "Flights",
    icon: {
      focused: "airplane-sharp",
      unfocused: "airplane-outline",
    },
  },
  AccountScreen: {
    label: "Account",
    icon: {
      focused: "person-sharp",
      unfocused: "person-outline",
    },
  },
};
