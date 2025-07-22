import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Modal, Platform, Pressable, StyleSheet } from "react-native";
import { Box, Row } from "~/components/Box";
import { Colors } from "~/theme/colors";
import { Text } from "../Text";

interface Props {
  value?: Date;
  onSelect: (date: Date) => void;
  placeholder: string;
  minimumDate?: Date;
  disabled?: boolean;
}

export const DatePicker = ({
  value,
  onSelect,
  placeholder,
  minimumDate,
  disabled,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(value || new Date());

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const handleConfirm = () => {
    onSelect(tempDate);
    setShowModal(false);
  };

  const handleCancel = () => {
    setTempDate(value || new Date());
    setShowModal(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <Pressable
        onPress={() => setShowModal(true)}
        style={styles.dateButton}
        disabled={disabled}
      >
        <Text
          variant="paragraphMedium"
          color={disabled ? "gray_300" : !value ? "gray_400" : "gray_600"}
        >
          {value ? formatDate(value) : placeholder}
        </Text>
        <MaterialCommunityIcons
          name="calendar"
          size={20}
          color={disabled ? Colors.gray_300 : Colors.gray_600}
        />
      </Pressable>

      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet"
        transparent={Platform.OS === "android"}
      >
        <Box flex={1} backgroundColor={"white"}>
          {Platform.OS === "android" && (
            <Box flex={1} justifyContent="center" alignItems="center">
              <Box
                backgroundColor="white"
                borderRadius={12}
                padding={20}
                marginHorizontal={20}
                width="90%"
              >
                <Row
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom={20}
                >
                  <Text variant="headingMedium" color="gray_600">
                    Select Date
                  </Text>
                  <Pressable onPress={handleCancel} style={styles.closeButton}>
                    <MaterialCommunityIcons
                      name="close"
                      size={24}
                      color={Colors.gray_600}
                    />
                  </Pressable>
                </Row>

                <DateTimePicker
                  value={tempDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                  minimumDate={minimumDate}
                />

                <Row gap={12} marginTop={20}>
                  <Pressable onPress={handleCancel} style={styles.cancelButton}>
                    <Text variant="paragraphMedium" color="gray_600">
                      Cancel
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={handleConfirm}
                    style={styles.confirmButton}
                  >
                    <Text variant="paragraphMedium" color="white">
                      Confirm
                    </Text>
                  </Pressable>
                </Row>
              </Box>
            </Box>
          )}

          {Platform.OS === "ios" && (
            <>
              <Row
                justifyContent="space-between"
                alignItems="center"
                padding={20}
                borderBottomWidth={1}
                borderBottomColor="gray_200"
              >
                <Pressable onPress={handleCancel}>
                  <Text variant="paragraphMedium" color="primary">
                    Cancel
                  </Text>
                </Pressable>
                <Text variant="headingMedium" color="gray_600">
                  Select Date
                </Text>
                <Pressable onPress={handleConfirm}>
                  <Text variant="paragraphMedium" color="primary">
                    Done
                  </Text>
                </Pressable>
              </Row>

              <Box padding={20}>
                <DateTimePicker
                  value={tempDate}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                  minimumDate={minimumDate}
                />
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  dateButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.gray_300,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.white,
  },
  closeButton: {
    padding: 8,
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray_300,
    alignItems: "center",
  },
  confirmButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
});
