import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons';


const AddCalories = (props) => {
    return (
        <Modal animationType='slide' visible={props.visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={ {flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 5, paddingBottom: 5, borderBottomWidth: 1} }>
                        <Text style={ {alignSelf: 'center'} }>Add Calories</Text>
                        <TouchableOpacity onPress={() => {props.close(true); props.setOpenType(false)}}>
                            <AntDesign name="closecircle" size={40} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={ {elevation: 1, zIndex: 1} }>
                        <Text>Type</Text>
                        <DropDownPicker
                            open={props.openType}
                            value={props.type}
                            items={props.items}
                            setOpen={props.setOpenType}
                            setValue={props.setType}
                            setItems={props.setItems}
                            closeAfterSelecting={true}
                            dropDownDirection="BOTTOM"
                        />
                    </View>
                    <View style={ {flex: 1, width: '100%', justifyContent: 'space-evenly'} }>
                        <Input placeholder='Title' keyboardType='default'/>
                        <Input placeholder='Calories' keyboardType='numeric'/>
                    </View>
                    <View style={ {width: '98%', justifyContent: 'flex-end', marginTop: '5%'} }>
                        <View style={ {backgroundColor: '#3399FF', borderRadius: 20} }>
                            <Button title='Add' color='white'/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const Input = (props) => {
    return (
        <View>
            <Text>{props.placeholder}</Text>
            <TextInput style={styles.input} keyboardType={props.keyboardType} returnKeyType='done' />
        </View>
    );
}

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        height: '50%',
        padding: '2%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        width: '90%',
    },
    input: {
        borderWidth: 1,
        lineHeight: '40%',
    },
});

export default AddCalories;
