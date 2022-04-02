import { SatellitePosition } from "../../types/satellites";

export const positionsFetcher = async (
  norad_id: string,
  observer_lat?: string,
  observer_lng?: string,
  observer_alt?: string
): Promise<SatellitePosition> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/positions/${norad_id}/${observer_lat}/${observer_lng}/${observer_alt}/1&apiKey=${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
    { method: "GET", headers: new Headers(), mode: "cors", cache: "default" }
  );

  return response.json();
};

export const visualPassesFetcher = async (
  norad_id: string,
  observer_lat?: string,
  observer_lng?: string,
  observer_alt?: string
): Promise<SatellitePosition> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/visualpasses/${norad_id}/${observer_lat}/${observer_lng}/${observer_alt}/2/600&apiKey=${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
    { method: "GET", headers: new Headers(), mode: "cors", cache: "default" }
  );

  return response.json();
};
