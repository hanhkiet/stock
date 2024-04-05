import {StyleSheet, Text, TouchableOpacity} from "react-native";

export function StockButton({name, code, onPress}) {
    return <TouchableOpacity style={styles.button} onPress={() => onPress(name, code)}>
        <Text>{name}</Text>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        borderWidth: 1,
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightGray',
    }
})
