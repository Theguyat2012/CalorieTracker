import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import AddCalories from './AddCalories';


const Equation = () => {
    const [variables, setVariables] = useState([0, 0, 0, 0]);
    const [visible, setVisible] = useState(false);

    const [openType, setOpenType] = useState(false);
    const [type, setType] =  useState(null);
    const [items, setItems] = useState([
      {label: 'Consumed', value: 'Consumed'},
      {label: 'Burned', value: 'Burned'}
    ]);

    const placeholders = ['Limit', 'Consumed', 'Burned', 'Remaining'];
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
            <View style={ styles.date }>
                <View style={ {alignSelf: 'center'} }>
                    <Text>{monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</Text>
                </View>
            </View>
            <View style={ {alignItems: 'center'} }>
                <AddCaloriesButton open={() => {setVisible(true); setType(placeholders[1])}} title={placeholders[1]} />
                <AddCaloriesButton open={() => {setVisible(true); setType(placeholders[2])}} title={placeholders[2]} />
            </View>
            <View>
                <TextInput style={ {borderWidth: 1, margin: 5, padding: 5} } placeholder={placeholders[0]} keyboardType='numeric' returnKeyType='done' onChangeText={text => updateVariables(0, parseInt(text))}/>
                <TextInput style={ {borderWidth: 1, margin: 5, padding: 5} } placeholder={placeholders[1]} keyboardType='numeric' returnKeyType='done' onChangeText={text => updateVariables(1, parseInt(text))} />
                <TextInput style={ {borderWidth: 1, margin: 5, padding: 5} } placeholder={placeholders[2]} keyboardType='numeric' returnKeyType='done' onChangeText={text => updateVariables(2, parseInt(text))} />
            </View>
            <AddCalories visible={visible} openType={openType} setOpenType={setOpenType} type={type} setType={setType} items={items} setItems={setItems} close={() => setVisible(false)} />
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

const AddCaloriesButton = (props) => {
    return (
        <View style={ {width: '98%', marginTop: '3%'} }>
            <TouchableOpacity onPress={props.open} style={ {flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#3399FF', borderRadius: 40} }>
                <Text style={ {alignSelf: 'center', paddingStart: '4%'} }>{props.title}</Text>
                <Entypo name="circle-with-plus" size={40} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        alignSelf: 'center',
        backgroundColor: '#339FFF',
        padding: '3%',
        width: '100%',
    },
});

export default Equation;
