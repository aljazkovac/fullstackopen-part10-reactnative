import { StyleSheet, View} from "react-native";
import Text from "../Basic/Text";

const styles = StyleSheet.create({
    headerDetail: {
        display: "flex",
        flexDirection: "column",
        padding: 10,
        alignItems: "center",
    },
    contentTitle: {
        fontSize: 15,
    },
    contentCount: {
        fontSize: 15,
        fontWeight: "bold",
    },
});

const calculateCount = (count) => {
    if(count >= 1000) {
        return (count / 1000).toFixed(1) + "k";
    } else {
        return count;
    }
}

const RepositoryHeaderDetail = ({ contentTitle, contentCount }) => {
    return(
        <View style={styles.headerDetail}>
            <Text style={styles.contentCount}>{calculateCount(contentCount)}</Text>
            <Text style={styles.contentTitle}>{contentTitle}</Text>
        </View>
    )
}

export default RepositoryHeaderDetail;
