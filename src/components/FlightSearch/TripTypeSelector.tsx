import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Row, Text } from "~/components";
import { Colors } from "~/theme/colors";

interface Props {
  isRoundTrip: boolean;
  onTripTypeChange: (isRoundTrip: boolean) => void;
}

export const TripTypeSelector = ({ isRoundTrip, onTripTypeChange }: Props) => {
  return (
    <Row marginBottom={24} gap={16}>
      <Pressable
        onPress={() => onTripTypeChange(true)}
        style={[
          styles.tripTypeButton,
          isRoundTrip && styles.tripTypeButtonActive,
          { opacity: 0.5 },
        ]}
        disabled
      >
        <Text
          variant="paragraphMedium"
          color={isRoundTrip ? "white" : "gray_600"}
        >
          Round trip
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onTripTypeChange(false)}
        style={[
          styles.tripTypeButton,
          !isRoundTrip && styles.tripTypeButtonActive,
        ]}
      >
        <Text
          variant="paragraphMedium"
          color={!isRoundTrip ? "white" : "gray_600"}
        >
          One way
        </Text>
      </Pressable>
    </Row>
  );
};

const styles = StyleSheet.create({
  tripTypeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray_300,
    backgroundColor: Colors.white,
  },
  tripTypeButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
});
