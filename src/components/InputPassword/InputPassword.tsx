import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Row } from "~/components/Box";
import { Colors } from "~/theme/colors";
import { Input } from "../Input";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const InputPassword = ({ value, onChangeText, placeholder }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Row
      alignItems="center"
      borderWidth={1}
      borderColor={Colors.gray_300}
      borderRadius={12}
      backgroundColor={Colors.white}
    >
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray_400}
        secureTextEntry={!showPassword}
        autoComplete="password"
        autoCorrect={false}
        style={{
          flex: 1,
          borderColor: "transparent",
        }}
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
    </Row>
  );
};

const styles = StyleSheet.create({
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
});
