import {Button, Linking, Text, StyleSheet, View} from "react-native";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryHeaderDetails from "./RepositoryHeaderDetails";
import {useParams} from "react-router-native";
import {useQuery} from "@apollo/client";
import {GET_REPOSITORY} from "../../graphql/queries";

const styles = StyleSheet.create({
    repoItem: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
});
const RepositoryItem = ({ singleView, ...props }) => {
    const { id } = singleView ? useParams() : props;
    console.log("ID:", id)
    const { data, loading, error } = singleView
            ? useQuery(GET_REPOSITORY, {
                        variables: { id },
                        fetchPolicy: "cache-and-network" })
            : {};
    if(loading) {
        return <View><Text>Loading...</Text></View>
    }
    if (error) {
        console.log(error);
        return <View><Text>Error</Text></View>
    }

    const repositoryData = singleView ? data?.repository : props;
    console.log("Repository data:", repositoryData);

    if (repositoryData !== undefined && repositoryData !== null)
    return(
        <View testID="repositoryItem" style={styles.repoItem}>
            <RepositoryHeader avatarUrl={repositoryData.ownerAvatarUrl} fullName={repositoryData.fullName} language={repositoryData.language} description={repositoryData.description} />
            <RepositoryHeaderDetails forksCount={repositoryData.forksCount} stargazersCount={repositoryData.stargazersCount} ratingAverage={repositoryData.ratingAverage} reviewCount={repositoryData.reviewCount} />
            {singleView && <Button title="Open in GitHub" onPress={() => Linking.openURL(repositoryData.url)} />}
        </View>
        )
    else return <View><Text>Repository data not found</Text></View>
}

export default RepositoryItem;