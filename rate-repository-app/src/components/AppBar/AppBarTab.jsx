import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Link} from "react-router-native";

const styles = StyleSheet.create({
    tab: {
    },
    content: {
        color: "#ffffff",
        fontWeight: "bold",
    }
    // ...
});

const AppBarTab = ({ content, style, onPress }) => {
    if(onPress) {
        return (
            <TouchableOpacity style={[styles.tab, style]} onPress={onPress}>
                <Text style={styles.content}>{content}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={[styles.tab, style]}>
            <Link to={`/${content}`}>
                <Text style={styles.content}>{content}</Text>
            </Link>
        </View>
    );
};
export default AppBarTab;
