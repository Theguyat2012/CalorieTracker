import React, { useEffect, useState } from 'react';
import { Button, Modal, PixelRatio, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SetLimitModal({
    visible,
    close,
    limit,
    setNewLimit
}) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(limit);
    }, [limit]);

    return (
        <Modal animationType='slide' visible={visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={styles.headerWrapper}>
                        <Text>New Limit</Text>
                        <TouchableOpacity onPress={() => close(true)}>
                            <AntDesign name="closecircle" size={40 * PixelRatio.getFontScale()} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.limitInput}
                            defaultValue={limit.toString()}
                            onChangeText={(text) => text ? setValue(parseFloat(text)) : setValue(0)}
                            keyboardType='number-pad'
                            returnKeyType='done'
                        />
                    </View>
                    <View style={ styles.addButtonContainer }>
                        <TouchableOpacity
                            style={ styles.addButton }
                            title='Set New Limit'
                            color='white'
                            onPress={() => {
                                setNewLimit(value);
                                close(true);
                            }}
                        >
                            <Text style={styles.addButtonText}>Set New Limit</Text>
                        </TouchableOpacity>
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
        borderRadius: 30 * PixelRatio.getFontScale(),
        borderWidth: 1,
        height: '25%',
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
        padding: 5 * PixelRatio.getFontScale(),
        width: '100%',
    },
    addButtonContainer: {
        width: '100%',
        justifyContent: 'flex-end',
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: '#3399FF',
        borderRadius: 20 * PixelRatio.getFontScale(),
        padding: 10 * PixelRatio.getFontScale(),
    },
    addButtonText: {
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
    },
});
