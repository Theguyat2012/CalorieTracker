import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";

let row = [];

export default function AddedCalories({key, title, calories, added, setAdded, addedKey, setData}) {

    const LeftActions = ({index, added, setAdded, setData, addedKey}) => {
        return (
            <TouchableOpacity style={styles.edit} onPress={() => {edit(index, added, setAdded, setData, addedKey);}}>
                <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
        );
    }

    const edit = (index, added, setAdded, setData, addedKey) => {
        
    }

    const RightActions = ({index, added, setAdded, setData, addedKey}) => {
        return (
            <TouchableOpacity style={styles.remove} onPress={() => {remove(index, added, setAdded, setData, addedKey);}}>
                <Text style={styles.actionText}>Remove</Text>
            </TouchableOpacity>
        );
    }

    const remove = (index, added, setAdded, setData, addedKey) => {
        let array = [];
        for (let i=0; i<added.length; i++) {
            if (i != index) {
                array.push(added[i]);
            }
        }

        if (row[index]) {
            row[index].close();
        }

        setAdded(array);
        setData(addedKey, array);
    }

    return (
        <View key={key} style={styles.addCaloriesWrapper}>
            <Swipeable
                ref={ref => row[key] = ref}
                renderLeftActions={
                    () => <LeftActions
                        index={key}
                        added={added}
                        setAdded={setAdded}
                        addedKey={addedKey}
                        setData={setData} />
                }
                renderRightActions={
                    () => <RightActions
                        index={key}
                        added={added}
                        setAdded={setAdded}
                        addedKey={addedKey}
                        setData={setData} />
                }>
                <View style={styles.addCalories}>
                    <Text>{title}</Text>
                    <Text>{calories}</Text>
                </View>
            </Swipeable>
        </View>
    );
}

const styles = StyleSheet.create({
    addCaloriesWrapper: {
        width: '98%',
        marginTop: '2%',
    },
    addCalories: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 40,
        borderWidth: 1,
        padding: '2.5%',
    },
    remove: {
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: 'red',
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: 'center',
        padding: '2.5%',
    },
    edit: {
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'green',
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: 'center',
        padding: '2.5%',
    },
    actionText: {
        color: 'white',
    },
});