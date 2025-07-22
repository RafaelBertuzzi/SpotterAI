import React from "react";
import { Column, Screen, Text } from "~/components";
import { useLogout } from "~/domain/Auth/useCases/useLogout";
import { MenuItem } from "./components";

export function AccountScreen() {
  const { logout } = useLogout();

  return (
    <Screen>
      <Column flex={1} padding={24}>
        <Text variant="headingLarge" color="neutral_900" marginBottom={32}>
          Account
        </Text>
        <MenuItem title="My Profile" onPress={() => {}} />
        <MenuItem title="Logout" onPress={logout} color="error_500" />
      </Column>
    </Screen>
  );
}
