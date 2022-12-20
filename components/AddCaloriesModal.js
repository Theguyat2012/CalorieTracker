import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons';


const AddCaloriesModal = (props) => {
    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState('');

    return (
        <Modal animationType='slide' visible={props.visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={styles.headerWrapper}>
                        <Text>Add Calories</Text>
                        <TouchableOpacity onPress={() => {props.close(true); props.setOpenType(false)}}>
                            <AntDesign name="closecircle" size={40} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dropDownOptions}>
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
                    <View style={styles.inputWrapper}>
                        <Input placeholder='Title' keyboardType='default' setter={setTitle}/>
                        <Input placeholder='Calories' keyboardType='numeric' setter={setCalories}/>
                    </View>
                    <View style={ styles.addButtonWrapper }>
                        <View style={ styles.addButtonContainer }>
                            <Button
                                title='Add'
                                color='white'
                                onPress={() => props.setAdded(props.added.concat([[props.type, title, parseInt(calories)]]))}
                            />
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
            <TextInput style={styles.input} keyboardType={props.keyboardType} returnKeyType='done' onChangeText={props.setter}/>
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
    headerWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
    },
    dropDownOptions: {
        elevation: 1,
        zIndex: 1,
    },
    input: {
        borderWidth: 1,
        lineHeight: '40%',
    },
    inputWrapper: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
    },
    addButtonWrapper: {
        width: '98%',
        justifyContent: 'flex-end',
        marginTop: '5%',
    },
    addButtonContainer: {
        backgroundColor: '#3399FF',
        borderRadius: 20,
    },
});

export default AddCaloriesModal;
