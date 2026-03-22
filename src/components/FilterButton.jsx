import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import { useState } from 'react'
import { colors } from '../constants/colors';

const FilterButton = ({ category }) => {
    const [ selected, setSelected ] = useState(true);

    return (
        <Pressable
            style={{
                opacity: selected ? 1 : 0.5,
                transform: [{ scale: selected ? 1 : 0.9 }],
                backgroundColor: colors[category],
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginHorizontal: 4
            }}
            onPress={() => { setSelected(!selected)}}
            >
            <Text>{category}</Text>
        </Pressable>
    );
}

export default FilterButton