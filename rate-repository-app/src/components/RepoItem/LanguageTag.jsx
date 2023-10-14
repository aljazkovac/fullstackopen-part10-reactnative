import { StyleSheet, View} from "react-native";
import Text from "../Basic/Text";

const styles = StyleSheet.create({
    tag: {
        backgroundColor: "#0366d6",
        borderRadius: 5,
    },
    tagText: {
        padding: 5,
    },
});
const LanguageTag = ({ language }) => {
    return(
        <View style={styles.tag}>
            <Text color="textWhite" style={styles.tagText}>{language}</Text>
        </View>
    )
}

export default LanguageTag;
