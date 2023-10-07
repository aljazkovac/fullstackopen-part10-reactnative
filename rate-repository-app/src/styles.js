import {StatusBar, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    item: {
        fontSize: 20,
    },
    container: {
        marginTop: StatusBar.currentHeight || 0,
        flexGrow: 1,
        flexShrink: 1,
    },
});
