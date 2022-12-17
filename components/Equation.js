import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';


const Equation = () => {
    const [variables, setVariables] = useState([0, 0, 0, 0])
    const placeholders = ['Limit', 'Consumed', 'Burned', 'Remaining'];

    const updateVariables = (index, value) => {
        let updated = [];

        for (let i=0; i<3; i++) {
            if (i === index) {
                if (!value) {
                    updated = updated.concat(0);
                } else {
                    updated = updated.concat(value);
                }
            } else {
                updated = updated.concat(variables[i]);
            }
        }

        updated = updated.concat(updated[0] - updated[1] + updated[2]);

        setVariables(updated);
    }

    return (
        <View>
            <Text style={ {alignSelf: 'center', paddingTop: 15} }>Calorie Tracker</Text>
            <View style={ {flexDirection: 'row', justifyContent: 'space-between', padding: 20} }>
                <Variable number={variables[0]} word={placeholders[0]} />
                <Text>-</Text>
                <Variable number={variables[1]} word={placeholders[1]} />
                <Text>+</Text>
                <Variable number={variables[2]} word={placeholders[2]} />
                <Text>=</Text>
                <Variable number={variables[3]} word={placeholders[3]} />
            </View>
            <View>
                <TextInput style={ {borderWidth: 1, margin: 5, padding: 5} } placeholder={placeholders[0]} keyboardType='numeric' returnKeyType='done' onChangeText={text => updateVariables(0, parseInt(text))}/>
                <TextInput style={ {borderWidth: 1, margin: 5, padding: 5} } placeholder={placeholders[1]} keyboardType='numeric' returnKeyType='done' onChangeText={text => updateVariables(1, parseInt(text))} />
                <TextInput style={ {borderWidth: 1, margin: 5, padding: 5} } placeholder={placeholders[2]} keyboardType='numeric' returnKeyType='done' onChangeText={text => updateVariables(2, parseInt(text))} />
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

export default Equation;
