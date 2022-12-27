import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons';

export default function AddCaloriesModal({visible, openType, setOpenType, type, setType, items, setItems, close, added, setAdded, addedKey, setData}) {
    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState('');

    const Input = ({placeholder, keyboardType, setter}) => {
        return (
            <View>
                <Text>{placeholder}</Text>
                <TextInput style={styles.input} keyboardType={keyboardType} returnKeyType='done' onChangeText={setter}/>
            </View>
        );
    }

    return (
        <Modal animationType='slide' visible={visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={styles.headerWrapper}>
                        <Text>Add Calories</Text>
                        <TouchableOpacity onPress={() => {close(true); setOpenType(false)}}>
                            <AntDesign name="closecircle" size={40} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dropDownOptions}>
                        <Text>Type</Text>
                        <DropDownPicker
                            open={openType}
                            value={type}
                            items={items}
                            setOpen={setOpenType}
                            setValue={setType}
                            setItems={setItems}
                            closeAfterSelecting={true}
                            dropDownDirection="BOTTOM"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input placeholder='Title' keyboardType='default' setter={setTitle}/>
                        <Input placeholder='Calories' keyboardType='number-pad' setter={setCalories}/>
                    </View>
                    <View style={ styles.addButtonWrapper }>
                        <View style={ styles.addButtonContainer }>
                            <Button
                                title='Add'
                                color='white'
                                onPress={() => {
                                    calories ? setAdded(added.concat([[type, title, parseInt(calories)]])) : null; close(true);
                                    setOpenType(false);
                                    setData(addedKey, added.concat([[type, title, parseInt(calories)]]));
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
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
        height: 40,
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
