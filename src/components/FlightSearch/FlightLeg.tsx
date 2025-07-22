import React from "react";
import { Column, Row, Text } from "~/components";
import { FlightLeg as FlightLegType } from "~/domain/Flights/flightTypes";

interface Props {
  leg: FlightLegType;
  isLastLeg: boolean;
}

export const FlightLeg = ({ leg, isLastLeg }: Props) => {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <Column marginBottom={isLastLeg ? 0 : 16}>
      <Row justifyContent="space-between" alignItems="center" marginBottom={8}>
        <Column>
          <Text variant="paragraphMedium" color="gray_600">
            {leg.origin.displayCode} → {leg.destination.displayCode}
          </Text>
          <Text variant="paragraphSmall" color="gray_600">
            {leg.origin.city} to {leg.destination.city}
          </Text>
        </Column>
        <Column alignItems="flex-end">
          <Text variant="paragraphMedium" color="gray_600">
            {formatDuration(leg.duration)}
          </Text>
          <Text variant="paragraphSmall" color="gray_600">
            {leg.stopCount === 0
              ? "Direct"
              : `${leg.stopCount} stop${leg.stopCount > 1 ? "s" : ""}`}
          </Text>
        </Column>
      </Row>

      <Row justifyContent="space-between" alignItems="center">
        <Text variant="paragraphSmall" color="gray_600">
          Depart: {formatTime(leg.departure)}
        </Text>
        <Text variant="paragraphSmall" color="gray_600">
          Arrive: {formatTime(leg.arrival)}
        </Text>
      </Row>

      {leg.carriers.length > 0 && (
        <Text variant="paragraphSmall" color="gray_600" marginTop={4}>
          {leg.carriers[0].name}
        </Text>
      )}
    </Column>
  );
};
