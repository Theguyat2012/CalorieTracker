import { useState } from 'react';
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Equation({limit, added}) {
    const [consumedTotal, setConsumedTotal ] = useState(false);
    const placeholders = ['Limit', 'Consumed', 'Burned', 'Remaining'];

    const Variable = ({number, word}) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.equationText}>{number % 1 === 0 ? number : number.toFixed(2)}</Text>
                <Text style={styles.equationText}>{word}</Text>
            </View>
        );
    }

    const getCalories = (added, type) => {
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

    const getConsumedTotal = (added) => {
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

    const getRemaining = (added, limit) => {
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

    return (
        <TouchableOpacity onPress={() => setConsumedTotal(!consumedTotal)}>
            {consumedTotal ?
                <View style={styles.equationWrapper}>
                    <Variable number={limit} word={placeholders[0]} />
                    <Text style={styles.equationText}>-</Text>
                    <Variable number={getConsumedTotal(added)} word="Consumed Total" />
                    <Text style={styles.equationText}>=</Text>
                    <Variable number={getRemaining(added, limit)} word={placeholders[3]} />
                </View>
                :
                <View style={styles.equationWrapper}>
                    <Variable number={limit} word={placeholders[0]} />
                    <Text style={styles.equationText}>-</Text>
                    <Variable number={getCalories(added, placeholders[1])} word={placeholders[1]} />
                    <Text style={styles.equationText}>+</Text>
                    <Variable number={getCalories(added, placeholders[2])} word={placeholders[2]} />
                    <Text style={styles.equationText}>=</Text>
                    <Variable number={getRemaining(added, limit)} word={placeholders[3]} />
                </View>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    equationWrapper: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25 * PixelRatio.getFontScale(),
    },
    equationText: {
        fontSize: 15 * PixelRatio.getFontScale(),
    },
});
