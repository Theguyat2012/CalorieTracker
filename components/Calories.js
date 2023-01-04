import { useState } from "react";
import { PixelRatio, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AddCaloriesButton from "./AddCaloriesButton";
import AddCaloriesModal from "./AddCaloriesModal";
import Calorie from "./Calorie";
import SetLimitModal from "./SetLimitModal";

export default function Calories({
    added,
    addCalorie,
    removeCalorie,
    limit,
    setNewLimit
}) {
    const [visibleLimit, setVisibleLimit] = useState(false);
    const [visibleAddCalories, setVisibleAddCalories] = useState(false);
    const [type, setType] =  useState(null);
    const [items, setItems] = useState([
      {label: 'Consumed', value: 'Consumed'},
      {label: 'Burned', value: 'Burned'}
    ]);

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
                <AddCaloriesButton add={false} title='Set Limit' onOpen={() => setVisibleLimit()} />
                <AddCaloriesButton add={true} title='Consumed' onOpen={() => {setVisibleAddCalories(true), setType('Consumed')}} />
                {renderCalories('Consumed')}
                <AddCaloriesButton add={true} title='Burned' onOpen={() => {setVisibleAddCalories(true), setType('Burned')}} />
                {renderCalories('Burned')}
            </GestureHandlerRootView>

            <AddCaloriesModal
                visible={visibleAddCalories}
                type={type}
                setType={setType}
                items={items}
                setItems={setItems}
                close={() => setVisibleAddCalories(false)}
                addCalorie={addCalorie}
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
