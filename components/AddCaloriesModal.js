import React, { useState } from 'react';
import { Modal, PixelRatio, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons';

export default function AddCaloriesModal({
    visible,
    type,
    setType,
    items,
    setItems,
    close,
    addCalorie,
}) {
    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState('');
    const [openType, setOpenType] = useState(false);

    return (
        <Modal animationType='slide' visible={visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={styles.headerWrapper}>
                        <Text>Add Calories</Text>
                        <TouchableOpacity onPress={() => {close(true); setOpenType(false)}}>
                            <AntDesign name="closecircle" size={40 * PixelRatio.getFontScale()} color="red" />
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
                        <TouchableOpacity
                            style={styles.addButtonContainer}
                            onPress={() => {
                                calories ? addCalorie(type, title, parseInt(calories)) : null;
                                close(true);
                                setOpenType(false);
                            }}
                        >
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const Input = ({placeholder, keyboardType, setter}) => {
    return (
        <View>
            <Text>{placeholder}</Text>
            <TextInput style={styles.input} keyboardType={keyboardType} returnKeyType='done' onChangeText={setter}/>
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
        borderRadius: 30 * PixelRatio.getFontScale(),
        borderWidth: 1,
        height: '50%',
        padding: '2%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2 * PixelRatio.getFontScale(),
        },
        shadowOpacity: 0.25,
        width: '90%',
    },
    headerWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 5 * PixelRatio.getFontScale(),
        paddingBottom: 5 * PixelRatio.getFontScale(),
        borderBottomWidth: 1,
    },
    dropDownOptions: {
        elevation: 1,
        zIndex: 1,
    },
    input: {
        borderWidth: 1,
        height: 40 * PixelRatio.getFontScale(),
    },
    inputWrapper: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
    },
    addButtonContainer: {
        alignItems: 'center',
        backgroundColor: '#3399FF',
        height: 40 * PixelRatio.getFontScale(),
        width: '100%',
        justifyContent: 'center',
        marginTop: '5%',
        borderRadius: 50 * PixelRatio.getFontScale(),
    },
    addButtonText: {
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
    },
});
