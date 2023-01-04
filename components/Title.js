import { PixelRatio, StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Calorie Tracker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: 'white',
        fontSize: 18 * PixelRatio.getFontScale(),
    },
    headerWrapper: {
        alignItems: 'center',
        backgroundColor: '#3399FF',
        padding: 10 * PixelRatio.getFontScale(),
    },
});