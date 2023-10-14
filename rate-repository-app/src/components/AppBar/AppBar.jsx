import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
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
        <AppBarTab content={"SignIn"}></AppBarTab>
        </View>
    );
};

export default AppBar;