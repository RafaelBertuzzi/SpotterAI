import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors } from "~/theme/colors";

interface Props extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const Input = ({ value, onChangeText, placeholder, ...rest }: Props) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray_400}
      {...rest}
      style={[styles.input, rest.style]}
    />
  );
};

const styles = StyleSheet.create({
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
});
