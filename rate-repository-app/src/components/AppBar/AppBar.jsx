import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../graphql/queries";
import useUser from "../../hooks/useUser";

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

const AppBar = () => {
    const { data } = useQuery(GET_USER);
    const [signOut] = useUser();
    console.log("data: ", data);
    const handleSignOut = async () => {
        console.log("Sign Out");
        await signOut();
    }
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <AppBarTab style={styles.tab} content={"Repositories"}></AppBarTab>
                { data === undefined || data.me === null || data.me === undefined
                ? <AppBarTab content={"SignIn"}></AppBarTab>
                : <AppBarTab content={`Sign out ${data.me.username}`} onPress={handleSignOut}></AppBarTab> }
            </ScrollView>
        </View>
    );
};

export default AppBar;