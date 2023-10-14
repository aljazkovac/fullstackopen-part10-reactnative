import {View, StyleSheet, Pressable, Text} from 'react-native';
//import Constants from 'expo-constants';

const styles = StyleSheet.create({
    tab: {
        display: "flex",
        // paddingTop: Constants.statusBarHeight,
        // ...
    },
    content: {
        color: "#ffffff",
        fontWeight: "bold",
    }
    // ...
});

const AppBarTab = ({ content }) => {
    console.log("Content: ", content);
    return (
        <View style={styles.tab}>
            <Pressable onPress={() => alert(`Hello ${content}`)}>
                <Text style={styles.content}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default AppBarTab;
