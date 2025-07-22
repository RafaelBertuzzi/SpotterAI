import { Airport, AirportAPI } from "./airportTypes";

function toAirport(airportApi: AirportAPI): Airport {
  return {
    iata: airportApi.skyId,
    name: airportApi.navigation.relevantFlightParams.localizedName,
    city: extractCityFromSuggestionTitle(
      airportApi.presentation.suggestionTitle
    ),
    country: airportApi.presentation.subtitle,
    entityId: airportApi.navigation.entityId,
    entityType: airportApi.navigation.entityType,
  };
}

function extractCityFromSuggestionTitle(suggestionTitle: string): string {
  const match = suggestionTitle.match(/^(.+?)\s*\(/);
  return match ? match[1].trim() : suggestionTitle;
}

export const airportAdapter = {
  toAirport,
};
