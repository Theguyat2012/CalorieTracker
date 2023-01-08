import React, { useState } from "react";
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Swipeable } from "react-native-gesture-handler";

// let prevOpen = null;
let row = [];

export default function Calorie({
    index,
    title,
    calories,
    openEdit,
    removeCalorie,
}) {

    const LeftActions = () => {
        return(
            <TouchableOpacity
                style={[styles.action, {alignItems: 'flex-start', backgroundColor: 'green'}]}
                onPress={() => {openEdit(); row[index].close();}}
            >
                <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
        );
    }

    const RightActions = () => {
        return (
            <TouchableOpacity
                style={[styles.action, {alignItems: 'flex-end', backgroundColor: 'red'}]}
                onPress={() => {removeCalorie(index); if (row[index]) {row[index].close();}}}
            >
                <Text style={styles.actionText}>Remove</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.calorieContainer}>
            <Swipeable
                ref={ref => row[index] = ref}
                // onSwipeableOpen={(direction) => 
                //     {
                //         if (direction !== "left") {
                //             console.log(prevOpen);
                //             if (prevOpen && prevOpen !== row[index]) {
                //                 prevOpen.close();
                //                 prevOpen = row[index];
                //             } else {
                //                 prevOpen = row[index];
                //             }
                //         }
                //     }
                // }
                renderLeftActions={() => <LeftActions />}
                renderRightActions={() => <RightActions />}
                friction={0.25}
            >
                <View style={styles.calorieInfo}>
                    <Text>{title}</Text>
                    <Text>{calories}</Text>
                </View>
            </Swipeable>
        </View>
    );
}

const styles = StyleSheet.create({
    calorieContainer: {
        width: '98%',
        marginTop: 9 * PixelRatio.getFontScale(),
    },
    calorieInfo: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 40 * PixelRatio.getFontScale(),
        borderWidth: 1,
        padding: 10 * PixelRatio.getFontScale(),
    },
    action: {
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 40 * PixelRatio.getFontScale(),
        borderWidth: 1,
        justifyContent: 'center',
        padding: 10 * PixelRatio.getFontScale(),
    },
    actionText: {
        color: 'white',
    },
});