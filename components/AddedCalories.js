import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";


const AddedCalories = (props) => {
    return (
        <View style={styles.addCaloriesWrapper}>
            <Swipeable renderRightActions={() => <RightActions index={props.index} added={props.added} setAdded={props.setAdded} />}>
                <View style={styles.addCalories}>
                    <Text>{props.title}</Text>
                    <Text>{props.calories}</Text>
                </View>
            </Swipeable>
        </View>
    );
}

const RightActions = (props) => {
    return (
        <TouchableOpacity style={styles.remove} onPress={() => remove(props.index, props.added, props.setAdded)}>
            <Text>Remove</Text>
        </TouchableOpacity>
    );
}

const remove = (index, added, setAdded) => {
    let array = [];
    for (let i=0; i<added.length; i++) {
        if (i != index) {
            array.push(added[i]);
        }
    }
    setAdded(array);
}

const styles = StyleSheet.create({
    addCaloriesWrapper: {
        width: '98%',
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
});

export default AddedCalories;