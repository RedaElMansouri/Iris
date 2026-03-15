import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useLocation } from './src/hooks/useLocation';
import { MOCK_EVENTS } from './src/constants/mockData';
import { colors } from './src/constants/colors';
import { MAP_STYLE } from './src/constants/mapStyle';

export default function App() {
  const { coords, loading } = useLocation();

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: colors.textPrimary }}>Localisation en cours...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MAP_STYLE}
        showsUserLocation
        initialRegion={{
          ...coords,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {MOCK_EVENTS.map((event) => (
          <Marker
            key={event.id}
            coordinate={{ latitude: event.latitude, longitude: event.longitude }}
            pinColor={colors[event.category]}
            title={event.title}
            description={event.lieu}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  map:       { flex: 1 },
  centered:  { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
});