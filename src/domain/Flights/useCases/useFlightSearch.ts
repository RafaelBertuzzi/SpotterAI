import { useMutation } from "@tanstack/react-query";
import { flightService } from "~/domain/Flights/flightService";

export function useFlightSearch() {
  const {
    mutate: searchFlights,
    data: searchResult,
    isPending: isSearching,
    error,
    reset,
  } = useMutation({
    mutationFn: flightService.searchFlights,
  });

  return {
    searchFlights,
    searchResult,
    isSearching,
    error,
    reset,
  };
}
