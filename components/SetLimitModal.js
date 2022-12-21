import React from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const SetLimitModal = (props) => {

    return (
        <Modal animationType='slide' visible={props.visible} transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalView }>
                    <View style={styles.headerWrapper}>
                        <Text>Set Limit</Text>
                        <TouchableOpacity onPress={() => props.close(true)}>
                            <AntDesign name="closecircle" size={40} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>New Limit</Text>
                        <TextInput value={props.limit} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalWrapper: {

    },
    modalView: {

    },
    headerWrapper: {}
    ,
});

export default SetLimitModal;
