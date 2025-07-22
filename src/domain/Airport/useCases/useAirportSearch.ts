import { useQuery } from "@tanstack/react-query";
import { airportService } from "~/domain/Airport/airportService";

export function useAirportSearch(debouncedQuery: string) {
  const {
    data: airports = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["airports", debouncedQuery],
    queryFn: () => airportService.searchAirport(debouncedQuery),
    enabled: !!debouncedQuery && debouncedQuery.length >= 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });

  return {
    airports,
    isLoading,
    error,
  };
}
