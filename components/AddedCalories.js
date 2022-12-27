import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";

let row = [];

export default function AddedCalories({index, title, calories, added, setAdded, addedKey, setData}) {

    const RightActions = () => {
        return (
            <TouchableOpacity style={styles.remove} onPress={remove}>
                <Text style={styles.actionText}>Remove</Text>
            </TouchableOpacity>
        );
    }

    const remove = () => {
        let array = [];
        for (let i=0; i<added.length; i++) {
            if (i != index) {
                array.push(added[i]);
            }
        }

        if (row[index]) {
            row[index].close();
        }

        setAdded(array);
        setData(addedKey, array);
    }

    return (
        <View key={index} style={styles.addCaloriesWrapper}>
            <Swipeable
                ref={ref => row[index] = ref}
                renderRightActions={
                    () => <RightActions />
                }>
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
        marginTop: '2%',
    },
    addCalories: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 40,
        borderWidth: 1,
        padding: '2.5%',
    },
    remove: {
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: 'red',
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: 'center',
        padding: '2.5%',
    },
    edit: {
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'green',
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: 'center',
        padding: '2.5%',
    },
    actionText: {
        color: 'white',
    },
});