import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Equation = (props) => {
    const placeholders = ['Limit', 'Consumed', 'Burned', 'Remaining'];

    return (
        <View>
            <View style={styles.headerWrapper}>
                <Text>Calorie Tracker</Text>
            </View>
            <View style={styles.equationWrapper}>
                <Variable number={props.limit} word={placeholders[0]} />
                <Text>-</Text>
                <Variable number={getCalories(props.added, placeholders[1])} word={placeholders[1]} />
                <Text>+</Text>
                <Variable number={getCalories(props.added, placeholders[2])} word={placeholders[2]} />
                <Text>=</Text>
                <Variable number={getRemaining(props.added, props.limit)} word={placeholders[3]} />
            </View>
        </View>
    );
}

const Variable = (props) => {
    return (
        <View style={ {alignItems: 'center'} }>
            <Text>{props.number}</Text>
            <Text>{props.word}</Text>
        </View>
    );
}

const getCalories = (added, type) => {
    let value = 0;

    if (added) {
        for (let i = 0; i<added.length; i++) {
            if (added[i][0] === type) {
                value += added[i][2];
            }
        }
    }

    return value;
}

const getRemaining = (added, limit) => {
    let remaining = 0;

    if (added) {
        for (let i=0; i<added.length; i++) {
            if (added[i][0] === 'Consumed') {
                remaining -= added[i][2];
            } else {
                remaining += added[i][2];
            }
        }
    }

    return limit + remaining;
}

const styles = StyleSheet.create({
    headerWrapper: {
        alignItems: 'center',
        backgroundColor: '#3399FF',
        padding: 10,
    },
    equationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
});

export default Equation;
