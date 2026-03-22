import { StyleSheet, View, Text } from 'react-native';
import { colors } from './src/constants/colors';
import TestScreen from './src/ui/TestScreen';
import MapScreen from './src/ui/MapScreen';

export default function App() {
  return(
    <MapScreen />
    // <TestScreen />

  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  map:       { flex: 1 },
  centered:  { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
});