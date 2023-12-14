import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import RepositoryItem from "./RepoItem/RepositoryItem";
import useRepositories from '../hooks/useRepositories';
import {useNavigate} from "react-router-native";
import SelectFilter from "./SelectFilter";
import {useEffect, useState} from "react";
import * as React from "react";
import {useDebounce} from "use-debounce";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const interpretFilter = (filter, searchKeyword) => {
    switch (filter.toLowerCase()) {
        case 'latest repositories':
            return { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchQuery: searchKeyword};
        case 'highest rated repositories':
            return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', searchQuery: searchKeyword};
        case 'lowest rated repositories':
            return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', searchQuery: searchKeyword};
        default:
            return { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchQuery: searchKeyword};
    }
}

export const RepositoryListContainer = ({ repositories, setSelectedFilter, setSearchQuery, searchQuery }) => {
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
                ListHeaderComponent={<SelectFilter setSelectedFilter={setSelectedFilter} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>}
            />
        </View>
    );
}
const RepositoryList = () => {
    const [selectedFilter, setSelectedFilter] = useState("");
    const [searchQuery, setSearchQuery] = React.useState('');
    const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
    const { repositories, refetch } = useRepositories();

    console.log("selectedFilter: ", selectedFilter)

    useEffect(() => {
        console.log("selectedFilter: ", selectedFilter)
        refetch(interpretFilter(selectedFilter, debouncedSearchQuery));
    } ,[selectedFilter, debouncedSearchQuery, refetch]);

    return (
        <RepositoryListContainer
            repositories={repositories}
            setSelectedFilter={setSelectedFilter}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
        />
    );
};

export default RepositoryList;