import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../graphql/queries";
import useUser from "../../hooks/useUser";
import {useNavigate} from "react-router-native";

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
    const navigate= useNavigate();

    console.log("user data", data);
    const handleSignOut = async () => {
        console.log("Sign Out");
        await signOut();
    }
    const handleCreateReview = async () => {
        console.log("Create review");
        navigate("/createReview");

    }
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <AppBarTab style={styles.tab} content={"Repositories"}></AppBarTab>
                { data === undefined || data.me === null || data.me === undefined
                    ? undefined
                    : <AppBarTab style={styles.tab} content={"Create Review"} onPress={handleCreateReview}></AppBarTab>
                }
                { data === undefined || data.me === null || data.me === undefined
                    ? <AppBarTab style={styles.tab} content={"SignIn"}></AppBarTab>
                    : <AppBarTab style={styles.tab} content={`SignOut ${data.me.username}`} onPress={handleSignOut}></AppBarTab>
                }
                { data === undefined || data.me === null || data.me === undefined
                    ? <AppBarTab style={styles.tab} content={`SignUp`}></AppBarTab>
                    : undefined
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;