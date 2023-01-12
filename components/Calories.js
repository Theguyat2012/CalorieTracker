import { FlatList, PixelRatio, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AddCaloriesButton from "./AddCaloriesButton";
import Calorie from "./Calorie";

export default function Calories({
    added,
    setEditMode,
    removeCalorie,
    setIndex,
    setInput,
    setType,
    setTitle,
    setServings,
    setCaloriesPerServing,
}) {

    const renderCalories = (type) => {
        return (
            <>
                {/* {added.map((element, index) => removeCalorie(index))} */}
                {added.map((element, index) =>
                    element.type === type ?
                    <Calorie
                        key={element.id}
                        index={index}
                        title={element.title}
                        calories={element.servings * element.caloriesPerServing}
                        openEdit={() => {
                            setIndex(index);
                            setEditMode(true);
                            setInput(type);
                            setTitle(element.title);
                            setType(element.type);
                            setServings(element.servings);
                            setCaloriesPerServing(element.caloriesPerServing);
                        }}
                        removeCalorie={removeCalorie}
                    />
                    :
                    null
                )}
            </>
        );
    }

    return (
        <>
            <GestureHandlerRootView style={styles.calories}>
                <AddCaloriesButton
                    add={false}
                    title='Set Limit'
                    onOpen={() => setInput('Limit')}
                />
                <AddCaloriesButton
                    add={true}
                    title='Consumed'
                    onOpen={() => {
                        setEditMode(false);
                        setInput('Calories');
                        setType('Consumed');
                        setTitle('');
                        setServings('1');
                        setCaloriesPerServing('');
                    }}
                />
                {renderCalories('Consumed')}
                <AddCaloriesButton
                    add={true}
                    title='Burned'
                    onOpen={() => {
                        setEditMode(false);
                        setInput('Calories');
                        setType('Burned');
                        setTitle('');
                        setServings('1');
                        setCaloriesPerServing('');
                    }}
                />
                {renderCalories('Burned')}
            </GestureHandlerRootView>
        </>
    );
}

const styles = StyleSheet.create({
    calories: {
        alignItems: 'center',
        paddingBottom: 10 * PixelRatio.getFontScale(),
    },
});
