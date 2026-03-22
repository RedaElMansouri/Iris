import { StyleSheet, View, Text, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { MOCK_EVENTS } from '../constants/mockData';
import { colors } from '../constants/colors';
import { MAP_STYLE } from '../constants/mapStyle';
import FilterButton from '../components/FilterButton'
import MapActionBar from '../components/MapActionBar';

const CATEGORIES = [...new Set(MOCK_EVENTS.map(e => e.category))];

export default function MapScreen() {
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
       <View style={{ position: 'absolute', zIndex: 1, top: 50, left: 0, right: 0}}>
          <FlatList
              data={CATEGORIES}
              renderItem={({item}) => <FilterButton category={item}/>}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          />
      </View>
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
      <View style={{ 
            position: 'absolute', 
            bottom: 30, 
            left: 0, 
            right: 0, 
            alignItems: 'center',
            zIndex: 1}}>
            <MapActionBar />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  map:       { flex: 1 },
  centered:  { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
});