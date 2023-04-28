import { Alert, PixelRatio, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Button({title, onPress}) {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const confirmRemoval = (alertTitle, alertMessage, removalFunction) => {
    Alert.alert(alertTitle, 'Are you sure that you want to ' + alertMessage, [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => removalFunction()},
      ]
    );
}

const reset = (setAdded, addedKey, setData) => {
    setAdded([]);
    setData(addedKey, []);
}

const removeCalories = (added, setAdded, addedKey, setData, label) => {
    let array = [];

    for (let i=0; i<added.length; i++) {
        if (added[i].type !== label) {
            array.push(added[i]);
        }
    }

    setAdded(array);
    setData(addedKey, array);
}

export default function Settings({
    added,
    setAdded,
    addedKey,
    setData,
    consumedLabel,
    burnedLabel,
}) {
    return (
        <>
            <Text style={styles.title}>Settings</Text>
            <Button title='Reset Calories' onPress={
                () => confirmRemoval(
                    "Reset Calories",
                    "reset your calories?",
                    () => {reset(setAdded, addedKey, setData)}
                )}
            />
            <Button title='Delete All CONSUMED' onPress={
                () => confirmRemoval(
                    "Delete All CONSUMED",
                    "delete all of your consumed calories?",
                    () => {removeCalories(added, setAdded, addedKey, setData, consumedLabel)}
                )}
            />
            <Button title='Delete All BURNED' onPress={
                () => confirmRemoval(
                    "Delete All BURNED",
                    "delete all of your burned calories?",
                    () => {removeCalories(added, setAdded, addedKey, setData, burnedLabel)}
                )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        paddingTop: 10,
        height: 55,
    },
    button: {
        verticalAlign: 'center',
        backgroundColor: 'red',
        borderRadius: 40,
        width: '98%',
        height: '100%',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        paddingLeft: 20,
        fontSize: 15 * PixelRatio.getFontScale(),
    },
    title: {
        fontSize: 18 * PixelRatio.getFontScale(),
        paddingLeft: 10 * PixelRatio.getFontScale(),
        paddingTop: 10 * PixelRatio.getFontScale(),
    },
});
