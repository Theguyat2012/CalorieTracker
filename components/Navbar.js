import { FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons';

import { PixelRatio, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Navbar() {
    
    return (
        <View style={styles.navbarWrapper}>
            <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons name="book-open-outline" size={24} color="black" style={styles.buttonIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="cog" size={24} color="black" style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarWrapper: {
        borderTopWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 5,
    },
    button: {
        flex: .5,
        alignItems: 'center',
    },
    buttonIcon: {
        fontSize: 50,
    },
    
});
