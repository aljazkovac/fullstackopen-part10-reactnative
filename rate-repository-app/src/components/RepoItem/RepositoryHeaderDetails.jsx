import { StyleSheet, View} from "react-native";
import RepositoryHeaderDetail from "./RepositoryHeaderDetail";

const styles = StyleSheet.create({
    headerDetails: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
    },
    forksCount: {
        fontSize: 20,
        fontWeight: "bold",
    },
    stargazersCount: {
        fontSize: 15,
    },
    ratingAverage: {
        fontSize: 15,
    },
    reviewCount: {
        fontSize: 15,
    },
});
const RepositoryHeaderDetails = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
    return(
        <View style={styles.headerDetails}>
            <RepositoryHeaderDetail contentTitle="Forks" contentCount={forksCount} />
            <RepositoryHeaderDetail contentTitle="Stars" contentCount={stargazersCount} />
            <RepositoryHeaderDetail contentTitle="Rating" contentCount={ratingAverage} />
            <RepositoryHeaderDetail contentTitle="Reviews" contentCount={reviewCount} />
        </View>
    )
}

export default RepositoryHeaderDetails;
