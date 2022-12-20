import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Equation = () => {
    const [variables, setVariables] = useState([0, 0, 0, 0]);

    const placeholders = ['Limit', 'Consumed', 'Burned', 'Remaining'];

    return (
        <View>
            <View style={styles.headerWrapper}>
                <Text>Calorie Tracker</Text>
            </View>
            <View style={styles.equationWrapper}>
                <Variable number={variables[0]} word={placeholders[0]} />
                <Text>-</Text>
                <Variable number={variables[1]} word={placeholders[1]} />
                <Text>+</Text>
                <Variable number={variables[2]} word={placeholders[2]} />
                <Text>=</Text>
                <Variable number={variables[3]} word={placeholders[3]} />
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
