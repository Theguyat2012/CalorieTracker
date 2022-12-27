import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 

export default function AddCaloriesButton({add, title, onOpen}) {
    return (
        add === true ?
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={onOpen}>
                <Text style={styles.text}>{title}</Text>
                <Entypo name="circle-with-plus" size='40%' color='white' />
            </TouchableOpacity>
        </View>
        :
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={onOpen}>
                <Text style={styles.text}>{title}</Text>
                <Entypo name="circle-with-plus" size='40%' color='#3399FF' />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    wrapper: {
        width: '98%',
        marginTop: '3%'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3399FF',
        borderRadius: 40
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        paddingStart: '4%',
    },
});
