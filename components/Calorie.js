import React from "react";
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Swipeable } from "react-native-gesture-handler";

export default function Calorie({
    index,
    title,
    calories,
    removeCalorie,
}) {
    let row = [];

    const RightActions = () => {
        return (
            <TouchableOpacity style={styles.remove} onPress={() => {removeCalorie(index); if (row[index]) {row[index].close()}}}>
                <Text style={styles.actionText}>Remove</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View key={index} style={styles.addCaloriesWrapper}>
            <Swipeable
                ref={ref => row[index] = ref}
                renderRightActions={() => <RightActions />}>
                <View style={styles.addCalories}>
                    <Text>{title}</Text>
                    <Text>{calories}</Text>
                </View>
            </Swipeable>
        </View>
    );
}

const styles = StyleSheet.create({
    addCaloriesWrapper: {
        width: '98%',
        marginTop: 9 * PixelRatio.getFontScale(),
    },
    addCalories: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 40 * PixelRatio.getFontScale(),
        borderWidth: 1,
        padding: 10 * PixelRatio.getFontScale(),
    },
    remove: {
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: 'red',
        borderRadius: 40 * PixelRatio.getFontScale(),
        borderWidth: 1,
        justifyContent: 'center',
        padding: 10 * PixelRatio.getFontScale(),
    },
    edit: {
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'green',
        borderRadius: 40 * PixelRatio.getFontScale(),
        borderWidth: 1,
        justifyContent: 'center',
        padding: '2.5%',
    },
    actionText: {
        color: 'white',
    },
});