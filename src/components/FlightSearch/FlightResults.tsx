import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Modal, Pressable, StyleSheet, View } from "react-native";
import { Box, Column, Row, Text } from "~/components";
import { FlightSearchResult } from "~/domain/Flights/flightTypes";
import { Colors } from "~/theme/colors";
import { FlightCard } from "./FlightCard";

interface Props {
  searchResult?: FlightSearchResult;
  error?: Error | null;
  isVisible: boolean;
  onClose: () => void;
}

export const FlightResults = ({
  searchResult,
  error,
  isVisible,
  onClose,
}: Props) => {
  const renderError = () => (
    <Column
      padding={16}
      backgroundColor="error_50"
      borderRadius={8}
      margin={20}
    >
      <Text variant="paragraphMedium" color="error_500">
        Error searching flights. Please try again.
      </Text>
    </Column>
  );

  const renderResults = () => {
    if (!searchResult) return null;

    return (
      <Column flex={1}>
        <Row
          justifyContent="space-between"
          alignItems="center"
          padding={20}
          borderBottomWidth={1}
          borderBottomColor="gray_200"
        >
          <Text variant="headingMedium" color="gray_900">
            Found {searchResult.totalResults} flights
          </Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={Colors.gray_600}
            />
          </Pressable>
        </Row>

        <FlatList
          data={searchResult.itineraries}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <FlightCard itinerary={item} index={index} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </Column>
    );
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <Box flex={1} backgroundColor="white">
        {error ? renderError() : renderResults()}
      </Box>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: Colors.gray_100,
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
});
