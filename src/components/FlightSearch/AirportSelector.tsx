import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { AirportSearchInput, Column, Row } from "~/components";
import { Airport } from "~/domain/Airport/airportTypes";
import { Colors } from "~/theme/colors";

interface Props {
  departureAirport?: Airport;
  arrivalAirport?: Airport;
  onDepartureSelect: (airport: Airport) => void;
  onArrivalSelect: (airport: Airport) => void;
  onSwapAirports: () => void;
}

export const AirportSelector = ({
  departureAirport,
  arrivalAirport,
  onDepartureSelect,
  onArrivalSelect,
  onSwapAirports,
}: Props) => {
  return (
    <Column gap={16} marginBottom={24}>
      <AirportSearchInput
        value={departureAirport}
        onSelect={onDepartureSelect}
        placeholder="From"
      />

      <Row alignItems="center" justifyContent="center">
        <Pressable style={styles.swapButton} onPress={onSwapAirports}>
          <MaterialCommunityIcons
            name="swap-vertical"
            size={24}
            color={Colors.gray_600}
          />
        </Pressable>
      </Row>

      <AirportSearchInput
        value={arrivalAirport}
        onSelect={onArrivalSelect}
        placeholder="To"
      />
    </Column>
  );
};

const styles = StyleSheet.create({
  swapButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray_100,
    alignItems: "center",
    justifyContent: "center",
  },
});
