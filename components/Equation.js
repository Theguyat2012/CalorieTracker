import { View, Text } from 'react-native';


const limit = 0, consumed = 0, burned = 0, remaining = 0;

const Equation = () => {
    return (
        <View style={ {alignItems: 'center'} }>
            <Text>Calorie Tracker</Text>
            <View style={ {flexDirection: 'row'} }>
                <Variable number={limit} word='Limit' />
                <Text>-</Text>
                <Variable number={consumed} word='Consumed' />
                <Text>+</Text>
                <Variable number={burned} word='Burned' />
                <Text>=</Text>
                <Variable number={remaining} word='Remaining' />
            </View>
        </View>
    );
}

const Variable = (props) => {
    return (
        <View style={ {alignItems: 'center'} }>
            <View>
                <Text>{props.number}</Text>
            </View>
            <View>
                <Text>{props.word}</Text>
            </View>
        </View>
    );
}

export default Equation;
