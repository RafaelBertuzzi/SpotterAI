import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "~/components";
import { Colors } from "~/theme/colors";

interface Props {
  isDisabled: boolean;
  isLoading: boolean;
  onPress: () => void;
}

export const SearchButton = ({ isDisabled, isLoading, onPress }: Props) => {
  return (
    <Pressable
      style={[styles.searchButton, isDisabled && styles.searchButtonDisabled]}
      onPress={onPress}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <>
          <MaterialCommunityIcons
            name="loading"
            size={20}
            color={Colors.white}
          />
          <Text variant="paragraphMedium" color="white">
            Searching...
          </Text>
        </>
      ) : (
        <>
          <MaterialCommunityIcons
            name="magnify"
            size={20}
            color={Colors.white}
          />
          <Text variant="paragraphMedium" color="white">
            Search flights
          </Text>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    gap: 8,
  },
  searchButtonDisabled: {
    backgroundColor: Colors.gray_300,
  },
});
