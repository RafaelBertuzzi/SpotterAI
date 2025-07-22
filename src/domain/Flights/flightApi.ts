import { skyScrapperApi } from "~/api/apiConfig";
import { FlightSearchParams, FlightSearchResponseAPI } from "./flightTypes";

async function searchFlights(
  params: FlightSearchParams
): Promise<FlightSearchResponseAPI> {
  const response = await skyScrapperApi.get<FlightSearchResponseAPI>(
    "/flights/searchFlights",
    {
      params: {
        originSkyId: params.originSkyId,
        destinationSkyId: params.destinationSkyId,
        originEntityId: params.originEntityId,
        destinationEntityId: params.destinationEntityId,
        date: params.date,
        returnDate: params.returnDate,
      },
    }
  );
  return response.data;
}

export const flightApi = {
  searchFlights,
};
