import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Center, Column, Text } from "~/components";
import { useSignup } from "~/domain/Auth";
import { useAuthNavigation } from "~/hooks/useAuthNavigation";
import { Colors } from "~/theme/colors";

export const SignUpScreen = () => {
  const { back } = useAuthNavigation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isDisabled = !email || !password || !firstName || !lastName;
  const { signup, isLoading, isError } = useSignup();

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
        {/* Back Button */}
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
                <TextInput
                  style={styles.input}
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="Enter your first name"
                  placeholderTextColor={Colors.gray_400}
                  autoCapitalize="words"
                  autoComplete="name"
                  autoCorrect={false}
                />
              </Column>

              <Column gap={8}>
                <Text variant="paragraphMedium" color="gray_700" semiBold>
                  Last Name
                </Text>
                <TextInput
                  style={styles.input}
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Enter your last name"
                  placeholderTextColor={Colors.gray_400}
                  autoCapitalize="words"
                  autoComplete="name-family"
                  autoCorrect={false}
                />
              </Column>

              <Column gap={8}>
                <Text variant="paragraphMedium" color="gray_700" semiBold>
                  Email
                </Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  placeholderTextColor={Colors.gray_400}
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
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor={Colors.gray_400}
                    secureTextEntry={!showPassword}
                    autoComplete="password"
                    autoCorrect={false}
                  />
                  <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeButton}
                    hitSlop={8}
                  >
                    <MaterialCommunityIcons
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color={Colors.gray_500}
                    />
                  </Pressable>
                </View>
              </Column>

              {isError && (
                <Text
                  variant="paragraphSmall"
                  color="error_500"
                  textAlign="center"
                >
                  Failed to sign up. Please check your details.
                </Text>
              )}

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
  input: {
    borderWidth: 1,
    borderColor: Colors.gray_300,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: "Nunito-Regular",
    color: Colors.gray_800,
    backgroundColor: Colors.white,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.gray_300,
    borderRadius: 12,
    backgroundColor: Colors.white,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: "Nunito-Regular",
    color: Colors.gray_800,
  },
  eyeButton: {
    paddingHorizontal: 16,
    paddingVertical: 14,
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
