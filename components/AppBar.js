import { StatusBar, StyleSheet, View } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = 22;

export default function AppBar() {
    return (
        <View>
            <StatusBar style={styles.statusBar} />
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
