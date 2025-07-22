import React from "react";
import { Column, Row, Text } from "~/components";
import { FlightItinerary } from "~/domain/Flights/flightTypes";
import { FlightLeg } from "./FlightLeg";

interface Props {
  itinerary: FlightItinerary;
  index: number;
}

export const FlightCard = ({ itinerary, index }: Props) => {
  return (
    <Column
      marginBottom={16}
      padding={16}
      backgroundColor="white"
      borderRadius={12}
      borderWidth={1}
      borderColor="gray_200"
    >
      {/* Price and Tags */}
      <Row
        justifyContent="space-between"
        alignItems="flex-start"
        marginBottom={12}
      >
        <Column>
          <Text variant="headingSmall" color="primary">
            {itinerary.price.formatted}
          </Text>
          {itinerary.tags.length > 0 && (
            <Row gap={4} marginTop={4}>
              {itinerary.tags.slice(0, 2).map((tag, tagIndex) => (
                <Column
                  key={tagIndex}
                  backgroundColor="primary_100"
                  paddingHorizontal={8}
                  paddingVertical={2}
                  borderRadius={4}
                >
                  <Text variant="paragraphSmall" color="primary">
                    {tag}
                  </Text>
                </Column>
              ))}
            </Row>
          )}
        </Column>
        <Text variant="paragraphSmall" color="gray_600">
          #{index + 1}
        </Text>
      </Row>

      {/* Flight Legs */}
      {itinerary.legs.map((leg, legIndex) => (
        <FlightLeg
          key={leg.id}
          leg={leg}
          isLastLeg={legIndex === itinerary.legs.length - 1}
        />
      ))}
    </Column>
  );
};
