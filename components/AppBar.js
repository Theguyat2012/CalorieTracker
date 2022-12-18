import { View, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';


const AppBar = () => {
    return (
        <SafeAreaView style={[styles.container, styles.appBar]}>
            <StatusBar style={styles.statusBar}/>
        </SafeAreaView>
    );
}

const statusBarHeight = StatusBar.currentHeight;

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
    },
});

export default AppBar;
