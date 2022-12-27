import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SetLimitModal({ visible, close, limit, setLimit, limitKey, setData }) {
    const [value, setValue] = useState(limit);

    return (
        <Modal animationType='slide' visible={visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={styles.headerWrapper}>
                        <Text>New Limit</Text>
                        <TouchableOpacity onPress={() => close(true)}>
                            <AntDesign name="closecircle" size={40} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputWrapper}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.limitInput}
                                onChangeText={(text) => setValue(parseInt(text))}
                                keyboardType='numeric'
                                returnKeyType='done'
                            />
                        </View>
                        <View style={ styles.addButtonWrapper }>
                            <View style={ styles.addButtonContainer }>
                                <Button
                                    title='Set New Limit'
                                    color='white'
                                    onPress={() => {
                                        setLimit(value);
                                        close(true);
                                        setData(limitKey, value);
                                    }}
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
    },
    inputContainer: {
        justifyContent: 'center',
        flex: 2,
        width: '100%',
    },
    limitInput: {
        borderWidth: 1,
        height: 40,
        width: '100%',
    },
    addButtonWrapper: {
        width: '100%',
        justifyContent: 'flex-end',
    },
    addButtonContainer: {
        backgroundColor: '#3399FF',
        borderRadius: 20,
    },
});
