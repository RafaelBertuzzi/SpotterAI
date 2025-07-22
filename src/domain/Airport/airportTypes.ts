export interface Airport {
  skyId: string;
  name: string;
  city: string;
  country: string;
  entityId: string;
  entityType: "AIRPORT" | "CITY";
}

export interface AirportPresentationAPI {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface AirportNavigationAPI {
  entityId: string;
  entityType: "AIRPORT" | "CITY";
  localizedName: string;
  relevantFlightParams: RelevantFlightParamsAPI;
  relevantHotelParams: RelevantHotelParamsAPI;
}

export interface RelevantFlightParamsAPI {
  entityId: string;
  skyId: string;
  flightPlaceType: "AIRPORT" | "CITY";
  localizedName: string;
}

export interface RelevantHotelParamsAPI {
  entityId: string;
  entityType: "AIRPORT" | "CITY";
  localizedName: string;
}

export interface AirportAPI {
  entityId: string;
  presentation: AirportPresentationAPI;
  navigation: AirportNavigationAPI;
}

export interface AirportSearchAPI {
  status: boolean;
  timestamp: number;
  data: AirportAPI[];
}
