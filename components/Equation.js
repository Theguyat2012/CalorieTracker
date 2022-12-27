import { StyleSheet, Text, View } from 'react-native';

export default function Equation({limit, added}) {
    const placeholders = ['Limit', 'Consumed', 'Burned', 'Remaining'];

    const Variable = ({number, word}) => {
        return (
            <View style={ {alignItems: 'center'} }>
                <Text>{number}</Text>
                <Text>{word}</Text>
            </View>
        );
    }

    const getCalories = (added, type) => {
        let value = 0;
        if (added) {
            for (let i = 0; i<added.length; i++) {
                if (added[i][0] === type) {
                    value += added[i][2];
                }
            }
        }
        return value;
    }

    const getRemaining = (added, limit) => {
        let remaining = 0;
        if (added) {
            for (let i=0; i<added.length; i++) {
                if (added[i][0] === 'Consumed') {
                    remaining -= added[i][2];
                } else {
                    remaining += added[i][2];
                }
            }
        }
        return limit + remaining;
    }

    return (
        <View style={styles.equationWrapper}>
            <Variable number={limit} word={placeholders[0]} />
            <Text>-</Text>
            <Variable number={getCalories(added, placeholders[1])} word={placeholders[1]} />
            <Text>+</Text>
            <Variable number={getCalories(added, placeholders[2])} word={placeholders[2]} />
            <Text>=</Text>
            <Variable number={getRemaining(added, limit)} word={placeholders[3]} />
        </View>
    );
}

const styles = StyleSheet.create({
    equationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
});
