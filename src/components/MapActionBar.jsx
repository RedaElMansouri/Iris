import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

const MapActionBar = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    return (
        <View style={styles.container}>
            <Pressable
                style={{
                    opacity: isSettingsOpen ? 1 : 0.5,
                    transform: [{ scale: isSettingsOpen ? 1 : 0.9 }],
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    marginHorizontal: 4,
                    alignItems: 'center'
                }}
                onPress={() => { setIsSettingsOpen(!isSettingsOpen)}}
                >
                <Feather name="settings" size={35} color="black" />
                <Text>Settings</Text>
            </Pressable>

            <View style={{ flex: 1}}>

            </View>
            <Pressable
                style={{
                    opacity: isCalendarOpen ? 1 : 0.5,
                    transform: [{ scale: isCalendarOpen ? 1 : 0.9 }],
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    marginHorizontal: 4,
                    alignItems: 'center'
                }}
                onPress={() => { setIsCalendarOpen(!isCalendarOpen)}}
                >
                <Entypo name="calendar" size={35} color="black" />
                <Text>Calendar</Text>
            </Pressable>
        </View>
    )
}

export default MapActionBar

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#D3D3D3',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7
    },
    settings: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});