import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import RepositoryItem from "./RepoItem/RepositoryItem";
import useRepositories from '../hooks/useRepositories';
import {useNavigate} from "react-router-native";
import SelectFilter from "./SelectFilter";
import {useEffect, useState} from "react";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSelectedFilter }) => {
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
                ListHeaderComponent={<SelectFilter setSelectedFilter={setSelectedFilter}/>}
            />
        </View>
    );
}
const RepositoryList = () => {
    const [selectedFilter, setSelectedFilter] = useState("");
    const { repositories, refetch } = useRepositories();

    console.log("selectedFilter: ", selectedFilter)

    const interpretFilter = (filter) => {
        switch (filter.toLowerCase()) {
            case 'latest repositories':
                return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
            case 'highest rated repositories':
                return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
            case 'lowest rated repositories':
                return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
            default:
                return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
        }
    }

    useEffect(() => {
        console.log("selectedFilter: ", selectedFilter)
        refetch(interpretFilter(selectedFilter));
    } ,[selectedFilter, refetch]);

    return (
        <RepositoryListContainer
            repositories={repositories}
            setSelectedFilter={setSelectedFilter}
        />
    );
};

export default RepositoryList;