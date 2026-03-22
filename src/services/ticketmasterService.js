// services/ticketmasterService.ts

const API_KEY = process.env.EXPO_PUBLIC_TM_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

export async function fetchEventsByLocation(
  lat,
  lng,
  radius = 2,
  page = 0,
  size = 10,
) {
  const url = `${BASE_URL}/events.json?apikey=${API_KEY}&latlong=${lat},${lng}&radius=${radius}&unit=km&size=${size}&page=${page}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data._embedded?.events ?? [];

  } catch (error) {
    console.error('Erreur Ticketmaster:', error);
    throw error;
  }
}