import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "~/components";
import { TColorKeys } from "~/theme/colors";

interface Props {
  title: string;
  onPress: () => void;
  color?: TColorKeys;
}

export const MenuItem = ({ title, onPress, color }: Props) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text variant="headingMedium" color={color}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
