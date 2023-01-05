import { useState } from "react";
import { PixelRatio, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AddCaloriesButton from "./AddCaloriesButton";
import CalorieModal from "./CalorieModal";
import Calorie from "./Calorie";
import SetLimitModal from "./SetLimitModal";

export default function Calories({
    added,
    addCalorie,
    editCalorie,
    removeCalorie,
    limit,
    setNewLimit,
}) {
    const [visibleLimit, setVisibleLimit] = useState(false);
    const [visibleAddCalories, setVisibleAddCalories] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [type, setType] =  useState(null);
    const [items, setItems] = useState([
      {label: 'Consumed', value: 'Consumed'},
      {label: 'Burned', value: 'Burned'}
    ]);
    const[index, setIndex] = useState(null);
    const[title, setTitle] = useState('');
    const[servings, setServings] = useState(null);
    const[caloriesPerServing, setCaloriesPerServing] = useState(null);

    const renderCalories = (type) => {
        return (
            <>
                {/* {added.map((element, index) => removeCalorie(index))} */}
                {added.map((element, index) =>
                    element.type === type ?
                    <Calorie
                        key={index}
                        index={index}
                        title={element.title}
                        calories={element.servings * element.caloriesPerServing}
                        openEdit={(index) => {
                            setVisibleAddCalories(true);
                            setEditMode(true);
                            setType(type);
                            setIndex(index);
                            setTitle(element.title);
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

    const resetForAddCalories = () => {
        setEditMode(false);
        setTitle('');
        setServings('1');
        setCaloriesPerServing('');
    }

    return (
        <>
            <GestureHandlerRootView style={styles.calories}>
                <AddCaloriesButton
                    add={false}
                    title='Set Limit'
                    onOpen={() => setVisibleLimit()}
                />
                <AddCaloriesButton
                    add={true}
                    title='Consumed'
                    onOpen={() => {
                        setVisibleAddCalories(true);
                        setType('Consumed');
                        resetForAddCalories();
                    }}
                />
                {renderCalories('Consumed')}
                <AddCaloriesButton
                    add={true}
                    title='Burned'
                    onOpen={() => {
                        setVisibleAddCalories(true);
                        setType('Burned');
                        resetForAddCalories();
                    }}
                />
                {renderCalories('Burned')}
            </GestureHandlerRootView>

            <CalorieModal
                visible={visibleAddCalories}
                type={type}
                setType={setType}
                items={items}
                setItems={setItems}
                close={() => {
                    setVisibleAddCalories(false);
                    setEditMode(false);
                }}
                addCalorie={addCalorie}
                editCalorie={editCalorie}
                editMode={editMode}
                index={index}
                title={title}
                servings={servings}
                caloriesPerServing={caloriesPerServing}
            />

            <SetLimitModal
                visible={visibleLimit}
                close={() => setVisibleLimit(false)}
                limit={limit}
                setNewLimit={setNewLimit}
            />
        </>
    );
}

const styles = StyleSheet.create({
    calories: {
        alignItems: 'center',
        paddingBottom: 10 * PixelRatio.getFontScale(),
    },
});
