import { useQuery, useApolloClient } from '@apollo/client';
import {GET_REPOSITORIES, GET_REPOSITORY, GET_REVIEWS} from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchQuery) => {
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


    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy, orderDirection, searchQuery },
        fetchPolicy: 'cache-and-network',
    });
    const client = useApolloClient();

    if (error) {
        console.error('Error fetching repositories:', error);
    }

    const repositories = data ? data.repositories : {};

    return { repositories, loading, error, refetch, fetchRepository, fetchReviews };
};

export default useRepositories;
