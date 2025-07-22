import { skyScrapperApi } from "~/api/apiConfig";
import { AirportAPI, AirportSearchAPI } from "./airportTypes";

async function searchAirport(query: string): Promise<AirportAPI[]> {
  const response = await skyScrapperApi.get<AirportSearchAPI>(
    "/flights/searchAirport",
    {
      params: {
        query,
      },
    }
  );

  return response.data.data;
}

export const airportApi = {
  searchAirport,
};
