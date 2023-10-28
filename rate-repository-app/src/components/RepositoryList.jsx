import {FlatList, StyleSheet, View} from 'react-native';
import Index from "./RepoItem";
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repositories } = useRepositories();

    const repositoryNodes = repositories && repositories.edges
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <Index { ...item } /> }
        />
    );
};

export default RepositoryList;