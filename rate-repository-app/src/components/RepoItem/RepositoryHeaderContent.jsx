import { StyleSheet, View} from "react-native";
import Text from "../Basic/Text";
import LanguageTag from "./LanguageTag";

const styles = StyleSheet.create({
    headerContent: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: 20,
        alignItems: "flex-start",
    },
    fullName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        fontSize: 15,
    },
    language: {
        fontSize: 15,
    },
});
const RepositoryHeaderContent = ({ fullName, description, language }) => {
    return(
        <View style={styles.headerContent}>
            <Text style={styles.fullName}>{fullName}</Text>
            <Text style={styles.description}>{description}</Text>
            <LanguageTag language={language} />
        </View>
    )
}

export default RepositoryHeaderContent;
