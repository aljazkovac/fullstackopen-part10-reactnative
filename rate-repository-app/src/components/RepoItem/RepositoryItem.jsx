import {Button, Linking, Text, StyleSheet, View} from "react-native";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryHeaderDetails from "./RepositoryHeaderDetails";
import {useParams, useNavigate} from "react-router-native";
import useRepositories from "../../hooks/useRepositories";
import {useEffect, useState} from "react";

const styles = StyleSheet.create({
    repoItem: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
    button: {
        margin: 5,
        backgroundColor: "red",
    }
});
const RepositoryItem = ({ singleView, ...props }) => {
    const { id } = singleView ? useParams() : props;
    const navigate = useNavigate();
    const [repository, setRepository] = useState(null);
    const { loading, error, fetchRepository } = useRepositories();

    useEffect(() => {
        if (singleView) { // Only fetch repository if singleView is true
            const fetch = async () => {
                const data = await fetchRepository(id);
                setRepository(data);
            };
            fetch();
        }
    }, [id, singleView]);

    if(loading) {
        return <View><Text>Loading...</Text></View>
    }
    if (error) {
        console.log(error);
        return <View><Text>Error</Text></View>
    }

    const repositoryData = singleView ? repository : props;

    const handlePress = (id) => () => {
        console.log(id);
        navigate(`/${id}`);
    }

    if (repositoryData !== undefined && repositoryData !== null)
    return(
        <View testID="repositoryItem" style={styles.repoItem}>
            <RepositoryHeader avatarUrl={repositoryData.ownerAvatarUrl} fullName={repositoryData.fullName} language={repositoryData.language} description={repositoryData.description} />
            <RepositoryHeaderDetails forksCount={repositoryData.forksCount} stargazersCount={repositoryData.stargazersCount} ratingAverage={repositoryData.ratingAverage} reviewCount={repositoryData.reviewCount} />
            {singleView && <View style={styles.button}><Button title="Open in GitHub" onPress={() => Linking.openURL(repositoryData.url)} /></View>}
            {singleView && <View style={styles.button}><Button title="Create a review" onPress={handlePress(id)} /></View>}
        </View>
        )
    else return <View><Text>Repository data not found</Text></View>
}

export default RepositoryItem;