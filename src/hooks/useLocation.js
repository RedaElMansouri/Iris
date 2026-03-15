import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const MONTREAL = {
    latitude: 45.5017,
    longitude: -73.5673
};

export function useLocation() {
    const [coords, setCoords] = useState(MONTREAL);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            setLoading(false);
            return;
            }
            const loc = await Location.getCurrentPositionAsync({});
            setCoords({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            });
        } catch (e) {
            // Position indisponible → on garde Montréal par défaut
            setError('Position indisponible, affichage de Montréal.');
        } finally {
            setLoading(false);
        }
        })();
    }, []);

    return { coords, error, loading };
}