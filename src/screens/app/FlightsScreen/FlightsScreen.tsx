import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import {
  AirportSelector,
  Column,
  DateSelector,
  FlightResults,
  Screen,
  SearchButton,
  Text,
  TripTypeSelector,
} from "~/components";
import { Airport } from "~/domain/Airport/airportTypes";
import { useFlightSearch } from "~/domain/Flights";

export function FlightsScreen() {
  const [departureAirport, setDepartureAirport] = useState<Airport>();
  const [arrivalAirport, setArrivalAirport] = useState<Airport>();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const { searchFlights, searchResult, isSearching, error } = useFlightSearch();

  useEffect(() => {
    if (searchResult && !isSearching) {
      setShowResults(true);
    }
  }, [searchResult, isSearching]);

  useEffect(() => {
    if (error && !isSearching) {
      setShowResults(true);
    }
  }, [error, isSearching]);

  const handleSearch = () => {
    if (!departureAirport || !arrivalAirport || !departureDate) {
      Alert.alert(
        "Missing Information",
        "Please select departure airport, arrival airport, and departure date."
      );
      return;
    }

    if (isRoundTrip && !returnDate) {
      Alert.alert(
        "Missing Return Date",
        "Please select a return date for round trip."
      );
      return;
    }

    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0];
    };

    setShowResults(false);

    searchFlights({
      originSkyId: departureAirport.skyId,
      destinationSkyId: arrivalAirport.skyId,
      originEntityId: departureAirport.entityId,
      destinationEntityId: arrivalAirport.entityId,
      date: formatDate(departureDate),
      returnDate:
        isRoundTrip && returnDate ? formatDate(returnDate) : undefined,
    });
  };

  const handleSwapAirports = () => {
    const temp = departureAirport;
    setDepartureAirport(arrivalAirport);
    setArrivalAirport(temp);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  const isSearchDisabled =
    !departureAirport ||
    !arrivalAirport ||
    !departureDate ||
    (isRoundTrip && !returnDate);

  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Column padding={20}>
          <Text variant="headingLarge" color="gray_900" marginBottom={24}>
            Search Flights
          </Text>

          <TripTypeSelector
            isRoundTrip={isRoundTrip}
            onTripTypeChange={setIsRoundTrip}
          />

          <AirportSelector
            departureAirport={departureAirport}
            arrivalAirport={arrivalAirport}
            onDepartureSelect={setDepartureAirport}
            onArrivalSelect={setArrivalAirport}
            onSwapAirports={handleSwapAirports}
          />

          <DateSelector
            isRoundTrip={isRoundTrip}
            departureDate={departureDate}
            returnDate={returnDate}
            onDepartureDateSelect={setDepartureDate}
            onReturnDateSelect={setReturnDate}
          />

          <SearchButton
            isDisabled={isSearchDisabled}
            isLoading={isSearching}
            onPress={handleSearch}
          />
        </Column>
      </ScrollView>

      <FlightResults
        searchResult={searchResult}
        error={error}
        isVisible={showResults}
        onClose={handleCloseResults}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
