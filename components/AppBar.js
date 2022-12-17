import { View, Platform, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';


const AppBar = () => {
    return (
        <SafeAreaView style={[styles.container, styles.appBar]}>
            <StatusBar style={styles.statusBar}/>
        </SafeAreaView>
    );
}

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    statusbar: {
        backgroundColor: '#000000',
        height: statusBarHeight,
    },
    appBar: {
        backgroundColor: '#000000',
        height: appBarHeight,
    },
});

export default AppBar;
