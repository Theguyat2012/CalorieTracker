import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 


const AddCaloriesButton = (props) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={props.open} style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
                <Entypo name="circle-with-plus" size={props.size} color={props.color} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    wrapper: {width: '98%', marginTop: '3%'},
    button: {flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#3399FF', borderRadius: 40},
    text: {alignSelf: 'center', paddingStart: '4%'},
});

export default AddCaloriesButton;
