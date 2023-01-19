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

    const getConsumedTotal = () => {
        let total = 0;
        if (added) {
            for (let i=0; i<added.length; i++) {
                if (added[i].type === placeholders[1]) {
                    total += added[i].servings * added[i].caloriesPerServing;
                } else {
                    total -= added[i].servings * added[i].caloriesPerServing;
                }
            }
        }
        return total;
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

    const getConsumedPercentage = () => {
        let consumed = 0;
        if (added) {
            for (let i=0; i<added.length; i++) {
                if (added[i].type === placeholders[1]) {
                    consumed += added[i].servings * added[i].caloriesPerServing;
                }
            }
        }
        return (consumed / limit) * 100;
    }

    const getConsumedTotalPercentage = () => {
        return (getConsumedTotal() / limit) * 100;
    }

    const regular = () => {
        return (
            <>
                <Variable number={limit} word={placeholders[0]} />
                <Text style={styles.equationText}>-</Text>
                <Variable number={getCalories(placeholders[1])} word={placeholders[1]} />
                <Text style={styles.equationText}>+</Text>
                <Variable number={getCalories(placeholders[2])} word={placeholders[2]} />
                <Text style={styles.equationText}>=</Text>
                <Variable number={getRemaining(limit)} word={placeholders[3]} />
            </>
        );
    }

    const total = () => {
        return (
            <>
                <Variable number={limit} word={placeholders[0]} />
                <Text style={styles.equationText}>-</Text>
                <Variable number={getConsumedTotal()} word="Consumed Total" />
                <Text style={styles.equationText}>=</Text>
                <Variable number={getRemaining(limit)} word={placeholders[3]} />
            </>
        );
    }

    const percentage = () => {
        return (
            <>
                <Variable number={getConsumedPercentage()} word="Consumed" percent={true} />
                <Variable number={getConsumedTotalPercentage()} word="Consumed Total" percent={true} />
            </>
        );
    }

    const display = [regular, total, percentage];

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
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 25 * PixelRatio.getFontScale(),
    },
    equationText: {
        fontSize: 15 * PixelRatio.getFontScale(),
    },
});
