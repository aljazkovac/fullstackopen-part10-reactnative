import { StyleSheet, View} from "react-native";
import {Image} from "react-native";
import RepositoryHeaderContent from "./RepositoryHeaderContent";

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
    contentContainer: {
        flex: 1,
    }
});
const RepositoryHeader = ({ avatarUrl, fullName, description, language }) => {
    return(
        <View style={styles.header}>
            <Image source={{uri: avatarUrl}} style={styles.image} />
            <View style={styles.contentContainer}>
            <RepositoryHeaderContent fullName={fullName} description={description} language={language} />
            </View>
        </View>
    )
}

export default RepositoryHeader;
