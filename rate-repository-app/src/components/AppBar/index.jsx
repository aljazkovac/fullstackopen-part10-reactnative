import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#24292e",
    },
    tab: {
        marginRight: 10,
    }
});

const Index = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <AppBarTab style={styles.tab} content={"Repositories"}></AppBarTab>
                <AppBarTab content={"SignIn"}></AppBarTab>
            </ScrollView>
        </View>
    );
};

export default Index;