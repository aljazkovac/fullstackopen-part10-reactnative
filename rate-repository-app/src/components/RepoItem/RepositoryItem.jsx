import { StyleSheet, View} from "react-native";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryHeaderDetails from "./RepositoryHeaderDetails";

const styles = StyleSheet.create({
    repoItem: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
});
const RepositoryItem = ({ ownerAvatarUrl, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount }) => {
    return(
        <View testID="repositoryItem" style={styles.repoItem}>
            <RepositoryHeader avatarUrl={ownerAvatarUrl} fullName={fullName} language={language} description={description} />
            <RepositoryHeaderDetails forksCount={forksCount} stargazersCount={stargazersCount} ratingAverage={ratingAverage} reviewCount={reviewCount} />
        </View>
        )
}

export default RepositoryItem;