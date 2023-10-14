import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#24292e",
        // ...
    },
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
        <AppBarTab content={"Repositories"}></AppBarTab>
        </View>
    );
};

export default AppBar;