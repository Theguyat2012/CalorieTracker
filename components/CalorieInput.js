import { PixelRatio, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function CalorieInput({
    setInput,
    addCalorie,
    editCalorie,
    editMode,
    index,
    openType,
    setOpenType,
    type,
    setType,
    items,
    setItems,
    title,
    servings,
    caloriesPerServing,
}) {

    const Input = ({label, keyboardType, setter, defaultValue}) => {
        return (
            <View>
                <Text>{label}</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={keyboardType}
                    returnKeyType='done'
                    onChangeText={setter}
                    defaultValue={defaultValue}
                />
            </View>
        );
    }

    const reset = () => {
        setOpenType(false);
        setInput(null);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={reset}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Add Calories</Text>
                </View>
            </View>
            <View>
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
                <Input
                    label='Title'
                    keyboardType='default'
                    setter={(text) => text ? title=text : title=""}
                    defaultValue={title}
                />
                <Input
                    label={type === 'Consumed' ? 'Servings' : 'Sets'}
                    keyboardType='numeric'
                    setter={(text) =>  text ? servings=text : servings=0}
                    defaultValue={servings ? "" + servings : "0"}
                />
                <Input
                    label={type === 'Consumed' ? 'Calories Per Serving' : 'Calories Per Set'}
                    keyboardType='numeric'
                    setter={(text) => text ? caloriesPerServing=text : caloriesPerServing=0}
                    defaultValue={caloriesPerServing ? "" + caloriesPerServing : ""}
                />
                <View>
                    {editMode ?
                        <TouchableOpacity
                            style={[styles.addButtonContainer, {backgroundColor: 'green'}]}
                            onPress={() => {
                                caloriesPerServing ? 
                                    editCalorie(index, type, title, parseFloat(servings), parseFloat(caloriesPerServing))
                                    :
                                    editCalorie(index, type, title, parseFloat(servings), 0);
                                reset();
                            }}
                        >
                            <Text style={styles.addButtonText}>Edit</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.addButtonContainer}
                            onPress={() => {
                                caloriesPerServing ?
                                    addCalorie(type, title, parseFloat(servings), parseFloat(caloriesPerServing))
                                    :
                                    addCalorie(type, title, parseFloat(servings), 0);
                                reset();
                            }}
                        >
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    backButton: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 20 * PixelRatio.getFontScale(),
        padding: 10 * PixelRatio.getFontScale(),
        width: 80 * PixelRatio.getFontScale(),
    },
    backButtonText: {
        color: 'white',
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5 * PixelRatio.getFontScale(),
        paddingBottom: 13 * PixelRatio.getFontScale(),
    },
    headerTextContainer: {
        alignItems: 'center',
        flex: 1,
    },
    headerText: {
        fontSize: 15 * PixelRatio.getFontScale(),
    },
    dropDownOptions: {
        elevation: 1,
        zIndex: 1,
    },
    input: {
        borderColor: 'grey',
        borderRadius: 5 * PixelRatio.getFontScale(),
        borderWidth: 1,
        padding: 5 * PixelRatio.getFontScale(),
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
