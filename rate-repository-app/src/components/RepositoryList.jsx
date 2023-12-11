import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import RepositoryItem from "./RepoItem/RepositoryItem";
import useRepositories from '../hooks/useRepositories';
import {useNavigate} from "react-router-native";
import SelectFilter from "./SelectFilter";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories && repositories.edges
        ? repositories.edges.map(edge => edge.node)
        : [];
    const navigate = useNavigate();

    const handlePress = (id) => () => {
        console.log(id);
        navigate(`/${id}`);
    }

    return (
        <View>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <Pressable onPress={handlePress(item.id)}><RepositoryItem { ...item } singleView={false} /></Pressable> }
                ListHeaderComponent={<SelectFilter />}
            />
        </View>
    );
}
const RepositoryList = () => {
    const { repositories } = useRepositories();

    return (
        <RepositoryListContainer repositories={repositories} />
    );
};

export default RepositoryList;