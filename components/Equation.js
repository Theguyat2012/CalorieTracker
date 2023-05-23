import { useState } from 'react';
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Equation({limit, added}) {
    const [displayIndex, setDisplayIndex] = useState(0);
    const placeholders = ['Limit', 'Consumed', 'Burned', 'Remaining'];

    const Variable = ({number, word, percent}) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.equationText}>
                    {percent ?
                    <>
                        {number.toFixed(0)}%
                    </>
                    :
                    <>
                        {number % 1 === 0 ? number : number.toFixed(2)}
                    </>
                    }
                </Text>
                <Text style={styles.equationText}>{word}</Text>
            </View>
        );
    }

    const getCalories = (type) => {
        let value = 0;
        if (added) {
            for (let i = 0; i<added.length; i++) {
                if (added[i].type === type) {
                    value += added[i].servings * added[i].caloriesPerServing;
                }
            }
        }
        return value;
    }

    const getRemaining = (limit) => {
        let remaining = 0;
        if (added) {
            for (let i=0; i<added.length; i++) {
                if (added[i].type === placeholders[1]) {
                    remaining -= added[i].servings * added[i].caloriesPerServing;
                } else {
                    remaining += added[i].servings * added[i].caloriesPerServing;
                }
            }
        }
        return limit + remaining;
    }

    const getItems = (type) => {
        let items = 0;
        let i = 0;

        for(i=0; i<added.length; i++) {
            if (added[i].type === type) {
                items += 1;
            }
        }

        return items;
    }

    const regular = () => {
        return (
            <>
                <Variable number={added.length} word={"Items Logged"} />
                <Variable number={getRemaining(limit)} word={"Calories " + placeholders[3]} />
            </>
        );
    }

    const consumed = () => {
        return (
            <>
                <Variable number={getItems('Consumed')} word="Foods" />
                <Variable number={getCalories('Consumed')} word="Calories Consumed" />
            </>
        );
    }

    const burned = () => {
        return (
            <>
                <Variable number={getItems('Burned')} word="Exercises" />
                <Variable number={getCalories('Burned')} word="Calories Burned" />
            </>
        );
    }

    const difference = () => {
        return <Variable number={getCalories('Consumed') - getCalories('Burned')} word="Calorie Difference" />
    }

    const display = [regular, consumed, burned, difference];

    const changeDisplay = () => {
        if (displayIndex < display.length - 1) {
            setDisplayIndex(displayIndex + 1);
        } else {
            setDisplayIndex(0);
        }
    }

    return (
        <TouchableOpacity onPress={() => changeDisplay()}>
            <View style={styles.equationWrapper}>
                {display[displayIndex]()}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    equationWrapper: {
        backgroundColor: 'royalblue',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 25 * PixelRatio.getFontScale(),
        borderTopWidth: 1,
        borderTopColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    equationText: {
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
    },
});
