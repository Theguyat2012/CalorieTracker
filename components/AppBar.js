import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';


const AppBar = () => {
    return (
        <View>
            <StatusBar style={styles.statusBar} />
            <View style={styles.appBar} />
        </View>
    );
}

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = 22;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    statusbar: {
        backgroundColor: '#3399FF',
        height: statusBarHeight,
    },
    appBar: {
        backgroundColor: '#3399FF',
        height: appBarHeight,
    }
});

export default AppBar;
