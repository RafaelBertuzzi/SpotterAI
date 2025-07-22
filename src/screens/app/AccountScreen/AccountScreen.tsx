import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { Column, Screen, Text } from "~/components";
import { useLogout } from "~/domain/Auth/useCases/useLogout";
import { useAuthCredentials } from "~/services/authCredentials";
import { Colors } from "~/theme/colors";
import { MenuItem } from "./components";

export function AccountScreen() {
  const { logout } = useLogout();
  const { authCredentials } = useAuthCredentials();
  const user = authCredentials?.user;

  return (
    <Screen>
      <Column flex={1} padding={24}>
        <Text variant="headingLarge" color="gray_600" marginBottom={32}>
          Account
        </Text>
        {user && (
          <Column alignItems="center" marginBottom={32}>
            {user.profilePicture ? (
              <Image
                source={{ uri: user.profilePicture }}
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
            ) : (
              <MaterialCommunityIcons
                name="account"
                size={80}
                color={Colors.gray_600}
              />
            )}
            <Text variant="headingMedium" color="gray_600" marginBottom={4}>
              {user.firstName} {user.lastName}
            </Text>
            <Text variant="paragraphMedium" color="gray_600">
              {user.email}
            </Text>
          </Column>
        )}
        <MenuItem title="Logout" onPress={logout} color="error_500" />
      </Column>
    </Screen>
  );
}
