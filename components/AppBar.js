import { StatusBar, StyleSheet, View } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = 22;

export default function AppBar() {
    return (
        <>
            <StatusBar backgroundColor={"#3399FF"} translucent={true} />
            <View style={styles.appBar} />
        </>
    );
}

const styles = StyleSheet.create ({
    statusbar: {
        backgroundColor: '#3399FF',
        height: statusBarHeight,
    },
    appBar: {
        backgroundColor: 'royalblue',
        height: appBarHeight,
    }
});
