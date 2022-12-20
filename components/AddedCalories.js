import React from "react";
import { StyleSheet, Text, View } from 'react-native';


const AddedCalories = (props) => {
    return (
        <View style={styles.addCalories}>
            <Text>{props.title}</Text>
            <Text>{props.calories}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    addCalories: {
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2.5%',
        borderWidth: 1,
        borderRadius: 40,
    }
});

export default AddedCalories;