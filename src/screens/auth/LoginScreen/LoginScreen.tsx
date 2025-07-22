import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Center, Column, Input, InputPassword, Row, Text } from "~/components";
import { useLogin } from "~/domain/Auth";
import { useAuthNavigation } from "~/hooks/useAuthNavigation";
import { Colors } from "~/theme/colors";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = !email || !password;
  const { login, isLoading, isError } = useLogin();
  const { toSignUp } = useAuthNavigation();

  const handleLogin = async () => {
    login({ email, password });
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
        <Center flex={1} justifyContent="center" paddingHorizontal={24}>
          <Column gap={32} width="100%" maxWidth={400}>
            <Column gap={8} alignItems="center">
              <Text
                variant="headingLarge"
                color="gray_800"
                textAlign="center"
                semiBold
              >
                Sign In
              </Text>
              <Text
                variant="paragraphMedium"
                color="gray_500"
                textAlign="center"
              >
                Access your account to continue
              </Text>
            </Column>

            <Column gap={20}>
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

              {isError && (
                <Text
                  variant="paragraphSmall"
                  color="error_500"
                  textAlign="center"
                >
                  Invalid email or password
                </Text>
              )}

              <TouchableOpacity
                style={[
                  styles.loginButton,
                  { opacity: isDisabled || isLoading ? 0.5 : 1 },
                ]}
                onPress={handleLogin}
                activeOpacity={0.8}
                disabled={isDisabled}
              >
                <Text
                  variant="paragraphMedium"
                  color="white"
                  semiBold
                  textAlign="center"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Text>
              </TouchableOpacity>
            </Column>

            <Column gap={16} alignItems="center">
              <Pressable onPress={() => {}} hitSlop={8}>
                <Text
                  variant="paragraphSmall"
                  color="primary"
                  textAlign="center"
                  semiBold
                >
                  Forgot your password?
                </Text>
              </Pressable>

              <Row alignItems="center">
                <Text variant="paragraphSmall" color="gray_500">
                  Don&apos;t have an account?{" "}
                </Text>
                <Pressable onPress={toSignUp} hitSlop={8}>
                  <Text variant="paragraphSmall" color="primary" semiBold>
                    Sign Up
                  </Text>
                </Pressable>
              </Row>
            </Column>
          </Column>
        </Center>
      </Column>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});
