import { flightAdapter } from "./flightAdapter";
import { flightApi } from "./flightApi";
import { FlightSearchParams, FlightSearchResult } from "./flightTypes";

async function searchFlights(
  params: FlightSearchParams
): Promise<FlightSearchResult> {
  try {
    const flightSearchAPI = await flightApi.searchFlights(params);
    return flightAdapter.toFlightSearchResult(flightSearchAPI);
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
}

export const flightService = {
  searchFlights,
};
