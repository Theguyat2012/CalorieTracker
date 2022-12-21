import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const SetLimitModal = (props) => {
    const [value, setValue] = useState(props.limit);

    return (
        <Modal animationType='slide' visible={props.visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={styles.headerWrapper}>
                        <Text>New Limit</Text>
                        <TouchableOpacity onPress={() => props.close(true)}>
                            <AntDesign name="closecircle" size={40} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.limitInput} onChangeText={(text) => setValue(parseInt(text))} />
                        <View style={ styles.addButtonWrapper }>
                            <View style={ styles.addButtonContainer }>
                                <Button
                                    title='Set New Limit'
                                    color='white'
                                    onPress={() => {props.setLimit(value); props.close(true);}}
                                />
                            </View>
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
        height: '25%',
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
    inputWrapper: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between'
    },
    limitInput: {
        borderWidth: 1,
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

export default SetLimitModal;
