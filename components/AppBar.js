import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';


const AppBar = () => {
    return (
        <View>
            <StatusBar style={styles.statusBar} barStyle='dark-content'/>
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
        height: appBarHeight,
    }
});

export default AppBar;
