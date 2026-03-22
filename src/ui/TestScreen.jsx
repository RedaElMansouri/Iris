import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import FilterButton from '../components/FilterButton'
import { MOCK_EVENTS } from '../constants/mockData'
import { SafeAreaView } from 'react-native-safe-area-context';
import MapActionBar from '../components/MapActionBar';

// import { Slider } from 'react-native-awesome-slider';
// import { useSharedValue } from 'react-native-reanimated';


const CATEGORIES = [...new Set(MOCK_EVENTS.map(e => e.category))];

const TestScreen = () => {

    // const progress = useSharedValue(1);
    // const min = useSharedValue(0);
    // const max = useSharedValue(20);
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', marginTop: 10}}>
            <FlatList
                data={CATEGORIES}
                renderItem={({item}) => <FilterButton category={item}/>}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            {/* <Slider
                progress={progress}
                minimumValue={min}
                maximumValue={max}
                onValueChange={(val) => console.log(val)}
                theme={{
                    minimumTrackTintColor: '#4A90E2',
                    maximumTrackTintColor: '#4A90E2',
                    thumbTintColor: '#1a1a1a',
                }}
            /> */}
        </View>
        <View style={{alignItems: 'center'}}>
            <MapActionBar />
        </View>
    </SafeAreaView>
  )
}

export default TestScreen