import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Center, Column, Input, InputPassword, Text } from "~/components";
import { useSignup } from "~/domain/Auth";
import { useAuthNavigation } from "~/hooks/useAuthNavigation";
import { Colors } from "~/theme/colors";

export const SignUpScreen = () => {
  const { back } = useAuthNavigation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = !email || !password || !firstName || !lastName;
  const { signup, isLoading } = useSignup();

  const handleSignup = async () => {
    signup({ email, firstName, lastName, password });
  };

  return (
    <ScrollView
      bounces={false}
      style={{ flex: 1, backgroundColor: Colors.white }}
      contentContainerStyle={{ flexGrow: 1, minHeight: "100%" }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Column flex={1}>
        <Pressable style={styles.backButton} onPress={back} hitSlop={8}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={28}
            color={Colors.gray_700}
          />
        </Pressable>
        <Center flex={1} justifyContent="center" paddingHorizontal={24}>
          <Column gap={32} width="100%" maxWidth={400}>
            <Column gap={8} alignItems="center">
              <Text
                variant="headingLarge"
                color="gray_800"
                textAlign="center"
                semiBold
              >
                Sign Up
              </Text>
              <Text
                variant="paragraphMedium"
                color="gray_500"
                textAlign="center"
              >
                Create your account to get started
              </Text>
            </Column>

            <Column gap={20}>
              <Column gap={8}>
                <Text variant="paragraphMedium" color="gray_700" semiBold>
                  First Name
                </Text>
                <Input
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="Enter your first name"
                  autoCapitalize="words"
                  autoComplete="name"
                  autoCorrect={false}
                />
              </Column>

              <Column gap={8}>
                <Text variant="paragraphMedium" color="gray_700" semiBold>
                  Last Name
                </Text>
                <Input
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Enter your last name"
                  autoCapitalize="words"
                  autoComplete="name-family"
                  autoCorrect={false}
                />
              </Column>

              <Column gap={8}>
                <Text variant="paragraphMedium" color="gray_700" semiBold>
                  Email
                </Text>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                />
              </Column>

              <Column gap={8}>
                <Text variant="paragraphMedium" color="gray_700" semiBold>
                  Password
                </Text>
                <InputPassword
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                />
              </Column>

              <TouchableOpacity
                style={[
                  styles.loginButton,
                  { opacity: isDisabled || isLoading ? 0.5 : 1 },
                ]}
                onPress={handleSignup}
                activeOpacity={0.8}
                disabled={isDisabled}
              >
                <Text
                  variant="paragraphMedium"
                  color="white"
                  semiBold
                  textAlign="center"
                >
                  {isLoading ? "Signing up..." : "Sign Up"}
                </Text>
              </TouchableOpacity>
            </Column>
          </Column>
        </Center>
      </Column>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 60,
    left: 16,
    zIndex: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 20,
    padding: 4,
  },
  closeButton: {
    position: "absolute",
    right: 24,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 20,
    padding: 2,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
