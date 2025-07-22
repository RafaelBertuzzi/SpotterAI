import { airportAdapter } from "./airportAdapter";
import { airportApi } from "./airportApi";
import { Airport } from "./airportTypes";

async function searchAirport(query: string): Promise<Airport[]> {
  try {
    const airportSearchAPI = await airportApi.searchAirport(query);
    return airportSearchAPI.map(airportAdapter.toAirport);
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
}

export const airportService = {
  searchAirport,
};
