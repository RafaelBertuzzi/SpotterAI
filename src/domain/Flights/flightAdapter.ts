import {
  Carrier,
  CarrierAPI,
  FlightItinerary,
  FlightLeg,
  FlightPlace,
  FlightPlaceAPI,
  FlightSearchResponseAPI,
  FlightSearchResult,
  FlightSegment,
  ItineraryAPI,
  LegAPI,
  LegPlaceAPI,
  SegmentAPI,
} from "./flightTypes";

function toFlightPlaceFromSegment(place: FlightPlaceAPI): FlightPlace {
  return {
    id: place.flightPlaceId,
    name: place.name,
    displayCode: place.displayCode,
    city: place.parent?.name ?? place.name,
  };
}

function toFlightPlaceFromLeg(place: LegPlaceAPI): FlightPlace {
  return {
    id: place.id,
    name: place.name,
    displayCode: place.displayCode,
    city: place.city,
  };
}

function toCarrier(carrierApi: CarrierAPI): Carrier {
  return {
    id: carrierApi.id,
    name: carrierApi.name,
    logoUrl: carrierApi.logoUrl,
  };
}

function toFlightSegment(segmentApi: SegmentAPI): FlightSegment {
  return {
    id: segmentApi.id,
    origin: toFlightPlaceFromSegment(segmentApi.origin),
    destination: toFlightPlaceFromSegment(segmentApi.destination),
    departure: new Date(segmentApi.departure),
    arrival: new Date(segmentApi.arrival),
    duration: segmentApi.durationInMinutes,
    flightNumber: segmentApi.flightNumber,
    carrier: toCarrier(segmentApi.marketingCarrier),
  };
}

function toFlightLeg(legApi: LegAPI): FlightLeg {
  return {
    id: legApi.id,
    origin: toFlightPlaceFromLeg(legApi.origin),
    destination: toFlightPlaceFromLeg(legApi.destination),
    departure: new Date(legApi.departure),
    arrival: new Date(legApi.arrival),
    duration: legApi.durationInMinutes,
    stopCount: legApi.stopCount,
    carriers: legApi.carriers.marketing.map(toCarrier),
    segments: legApi.segments.map(toFlightSegment),
  };
}

function toFlightItinerary(itineraryApi: ItineraryAPI): FlightItinerary {
  return {
    id: itineraryApi.id,
    price: {
      amount: itineraryApi.price.raw,
      formatted: itineraryApi.price.formatted,
    },
    legs: itineraryApi.legs.map(toFlightLeg),
    tags: itineraryApi.tags || [],
    score: itineraryApi.score,
    isChangeable: itineraryApi.farePolicy.isChangeAllowed,
    isRefundable: itineraryApi.farePolicy.isCancellationAllowed,
  };
}

function toFlightSearchResult(
  responseApi: FlightSearchResponseAPI
): FlightSearchResult {
  return {
    itineraries: responseApi.data.itineraries.map(toFlightItinerary),
    totalResults: responseApi.data.context.totalResults,
    sessionId: responseApi.sessionId,
    filterStats: responseApi.data.filterStats,
  };
}

export const flightAdapter = {
  toFlightSearchResult,
  toFlightItinerary,
  toFlightLeg,
  toFlightSegment,
  toFlightPlaceFromSegment,
  toFlightPlaceFromLeg,
  toCarrier,
};
