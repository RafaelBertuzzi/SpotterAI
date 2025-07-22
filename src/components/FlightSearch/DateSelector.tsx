import React from "react";
import { Column, DatePicker, Row, Text } from "~/components";

interface Props {
  isRoundTrip: boolean;
  departureDate?: Date;
  returnDate?: Date;
  onDepartureDateSelect: (date: Date) => void;
  onReturnDateSelect: (date: Date) => void;
}

export const DateSelector = ({
  isRoundTrip,
  departureDate,
  returnDate,
  onDepartureDateSelect,
  onReturnDateSelect,
}: Props) => {
  return (
    <Row gap={16} marginBottom={32}>
      <Column flex={1}>
        <Text variant="paragraphSmall" color="gray_600" marginBottom={8}>
          Departure
        </Text>
        <DatePicker
          value={departureDate}
          onSelect={onDepartureDateSelect}
          placeholder="Select date"
        />
      </Column>

      <Column flex={1}>
        <Text
          variant="paragraphSmall"
          color={!isRoundTrip ? "gray_400" : "gray_600"}
          marginBottom={8}
        >
          Return
        </Text>
        <DatePicker
          value={returnDate}
          onSelect={onReturnDateSelect}
          placeholder="Select date"
          minimumDate={departureDate || new Date()}
          disabled={!isRoundTrip}
        />
      </Column>
    </Row>
  );
};
