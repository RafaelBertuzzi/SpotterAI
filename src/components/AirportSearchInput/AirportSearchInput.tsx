import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import { Box, Row } from "~/components/Box";
import { useAirportSearch } from "~/domain/Airport";
import { Airport } from "~/domain/Airport/airportTypes";
import { useDebounce } from "~/hooks";
import { Colors } from "~/theme/colors";
import { Input } from "../Input";
import { Text } from "../Text";

interface Props {
  value?: Airport;
  onSelect: (airport: Airport) => void;
  placeholder: string;
}

export const AirportSearchInput = ({ value, onSelect, placeholder }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 500);
  const { airports, isLoading } = useAirportSearch(debouncedQuery);

  const handleAirportSelect = (airport: Airport) => {
    onSelect(airport);
    setIsModalVisible(false);
    setSearchQuery("");
  };

  const displayValue = value ? `${value.name} (${value.skyId})` : "";

  const formatAirportDisplay = (airport: Airport) => {
    if (airport.entityType === "CITY") {
      return `${airport.name} (Any)`;
    }
    return `${airport.name} (${airport.skyId})`;
  };

  const formatAirportSubtitle = (airport: Airport) => {
    if (airport.entityType === "CITY") {
      return `${airport.country} - All airports`;
    }
    return `${airport.country}`;
  };

  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <Row pointerEvents="none" alignItems="center">
          <Input
            value={displayValue}
            onChangeText={() => {}}
            placeholder={placeholder}
          />
        </Row>
        <Box position="absolute" right={16} top={16}>
          <MaterialCommunityIcons
            name="airplane"
            size={20}
            color={Colors.gray_600}
          />
        </Box>
      </Pressable>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <Box flex={1} style={styles.modal}>
          <Row
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding={20}
            borderBottomWidth={1}
            borderBottomColor={Colors.gray_200}
          >
            <Text variant="headingMedium" color="gray_600">
              Search Airport
            </Text>
            <Pressable
              onPress={() => setIsModalVisible(false)}
              style={styles.closeButton}
            >
              <MaterialCommunityIcons
                name="close"
                size={24}
                color={Colors.gray_600}
              />
            </Pressable>
          </Row>

          <Row alignItems="center" paddingHorizontal={16} marginVertical={16}>
            <Input
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search by city or airport code"
              autoFocus
            />
          </Row>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={Colors.primary}
              style={styles.loading}
            />
          )}

          <FlatList
            data={airports}
            keyExtractor={(item) => item.entityId}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleAirportSelect(item)}
                style={styles.airportItem}
              >
                <Box flex={1}>
                  <Row alignItems="center" gap={8}>
                    <Text variant="paragraphMedium" color="gray_600">
                      {formatAirportDisplay(item)}
                    </Text>
                    {item.entityType === "AIRPORT" && (
                      <Box
                        backgroundColor="primary_100"
                        borderRadius={8}
                        padding={2}
                      >
                        <MaterialCommunityIcons
                          name="airplane"
                          size={12}
                          color={Colors.primary}
                        />
                      </Box>
                    )}
                    {item.entityType === "CITY" && (
                      <Box
                        backgroundColor="gray_200"
                        borderRadius={8}
                        padding={2}
                      >
                        <MaterialCommunityIcons
                          name="city"
                          size={12}
                          color={Colors.gray_600}
                        />
                      </Box>
                    )}
                  </Row>
                  <Text variant="paragraphSmall" color="gray_600">
                    {formatAirportSubtitle(item)}
                  </Text>
                </Box>
              </Pressable>
            )}
            ListEmptyComponent={() =>
              !isLoading && (
                <Box alignItems="center" padding={40}>
                  <Text variant="paragraphMedium" color="gray_600">
                    {searchQuery.length < 2
                      ? "Type at least 2 characters to search"
                      : "No airports found"}
                  </Text>
                </Box>
              )
            }
          />
        </Box>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  closeButton: {
    padding: 8,
  },
  loading: {
    marginLeft: 12,
  },
  airportItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
});
