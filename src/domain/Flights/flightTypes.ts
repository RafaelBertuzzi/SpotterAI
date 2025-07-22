export interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  returnDate?: string;
}

export interface FlightPlaceAPI {
  flightPlaceId: string;
  displayCode: string;
  parent?: {
    flightPlaceId: string;
    displayCode: string;
    name: string;
    type: "City" | "Airport";
  };
  name: string;
  type: "Airport" | "City";
}

export interface LegPlaceAPI {
  id: string;
  name: string;
  displayCode: string;
  city: string;
  isHighlighted: boolean;
}

export interface CarrierAPI {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
  logoUrl?: string;
}

export interface SegmentAPI {
  id: string;
  origin: FlightPlaceAPI;
  destination: FlightPlaceAPI;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: CarrierAPI;
  operatingCarrier: CarrierAPI;
}

export interface LegAPI {
  id: string;
  origin: LegPlaceAPI;
  destination: LegPlaceAPI;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string;
  arrival: string;
  timeDeltaInDays: number;
  carriers: {
    marketing: CarrierAPI[];
    operationType?: string;
  };
  segments: SegmentAPI[];
}

export interface ItineraryAPI {
  id: string;
  price: {
    raw: number;
    formatted: string;
  };
  legs: LegAPI[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: {
    isChangeAllowed: boolean;
    isPartiallyChangeable: boolean;
    isCancellationAllowed: boolean;
    isPartiallyRefundable: boolean;
  };
  eco?: {
    ecoContenderDelta: number;
  };
  tags: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}

export interface FilterStatsAPI {
  duration: {
    min: number;
    max: number;
  };
  airports: {
    city: string;
    airports: {
      id: string;
      name: string;
    }[];
  }[];
  carriers: CarrierAPI[];
  stopPrices?: {
    direct?: {
      isPresent: boolean;
      formattedPrice: string;
    };
    one?: {
      isPresent: boolean;
      formattedPrice: string;
    };
    twoOrMore?: {
      isPresent: boolean;
      formattedPrice?: string;
    };
  };
}

export interface FlightSearchResponseAPI {
  status: boolean;
  timestamp: number;
  sessionId: string;
  data: {
    context: {
      status: string;
      totalResults: number;
    };
    itineraries: ItineraryAPI[];
    messages?: unknown[];
    filterStats?: FilterStatsAPI;
  };
}

export interface FlightPlace {
  id: string;
  name: string;
  displayCode: string;
  city: string;
}

export interface Carrier {
  id: number;
  name: string;
  logoUrl?: string;
}

export interface FlightSegment {
  id: string;
  origin: FlightPlace;
  destination: FlightPlace;
  departure: Date;
  arrival: Date;
  duration: number;
  flightNumber: string;
  carrier: Carrier;
}

export interface FlightLeg {
  id: string;
  origin: FlightPlace;
  destination: FlightPlace;
  departure: Date;
  arrival: Date;
  duration: number;
  stopCount: number;
  carriers: Carrier[];
  segments: FlightSegment[];
}

export interface FlightItinerary {
  id: string;
  price: {
    amount: number;
    formatted: string;
  };
  legs: FlightLeg[];
  tags: string[];
  score: number;
  isChangeable: boolean;
  isRefundable: boolean;
}

export interface FlightSearchResult {
  itineraries: FlightItinerary[];
  totalResults: number;
  sessionId: string;
  filterStats?: FilterStatsAPI;
}
