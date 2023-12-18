import { useQuery, useApolloClient } from '@apollo/client';
import {GET_REPOSITORIES, GET_REPOSITORY, GET_REVIEWS} from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchQuery, first, after) => {
    const fetchRepository = async (id) => {
        try {
            const { data } = await client.query({
                query: GET_REPOSITORY,
                variables: { id },
                fetchPolicy: 'network-only',
            });
            return data.repository;
        } catch (e) {
            console.error('Error fetching single repository:', e);
            return null;
        }
    };

    const fetchReviews = async (id) => {
        try {
            const { data } = await client.query({
                query: GET_REVIEWS,
                variables: { id },
                fetchPolicy: 'network-only',
            });
            return data.repository.reviews;
        } catch (e) {
            console.error('Error fetching reviews:', e);
            return null;
        }
    }

    const { data, loading, error, refetch, fetchMore } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy, orderDirection, searchQuery, first, after },
        fetchPolicy: 'cache-and-network',
    });
    const client = useApolloClient();

    if (error) {
        console.error('Error fetching repositories:', error);
    }

    const repositories = data ? data.repositories : {};

    const handleFetchMore = () => {
        const canFetchMore =
            !loading && data && data.repositories.pageInfo.hasNextPage;
        console.log('loading', loading)
        console.log('data', data)
        console.log('data.repositories.pageInfo.hasNextPage', data.repositories.pageInfo.hasNextPage)
        console.log('canFetchMore', canFetchMore)

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_REPOSITORIES,
            variables: {
                orderBy,
                orderDirection,
                searchQuery,
                first,
                after: data.repositories.pageInfo.endCursor
            },
        });
    }

    return { repositories, loading, error, refetch, fetchRepository, fetchReviews, fetchMore: handleFetchMore };
};

export default useRepositories;
