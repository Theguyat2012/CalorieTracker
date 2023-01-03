import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = 22;

export default function AppBar() {
    return (
        <View>
            <StatusBar style="light" />
            <View style={styles.appBar} />
        </View>
    );
}

const styles = StyleSheet.create ({
    statusbar: {
        backgroundColor: '#3399FF',
        height: statusBarHeight,
    },
    appBar: {
        backgroundColor: '#3399FF',
        height: appBarHeight,
    }
});
