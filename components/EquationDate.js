import React from "react";

import { StyleSheet, Text, View } from 'react-native';


export default function EquationDate() {
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <View style={ styles.date }>
            <Text style={ styles.dateText }>{monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        alignItems: 'center',
        backgroundColor: '#339FFF',
        padding: '3%',
        width: '100%',
    },
    dateText: {
        color: 'white',
    },
});
