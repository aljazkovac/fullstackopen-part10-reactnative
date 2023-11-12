import { useQuery, useApolloClient } from '@apollo/client';
import {GET_REPOSITORIES, GET_REPOSITORY, GET_REVIEWS} from '../graphql/queries';

const useRepositories = () => {
    const fetchRepository = async (id) => {
        try {
            const { data } = await client.query({
                query: GET_REPOSITORY,
                variables: { id },
                fetchPolicy: 'network-only', // You might want to use 'network-only' to always fetch the latest data
            });
            return data.repository; // Or however the data is structured
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
                fetchPolicy: 'network-only', // You might want to use 'network-only' to always fetch the latest data
            });
            return data.repository.reviews; // Or however the data is structured
        } catch (e) {
            console.error('Error fetching reviews:', e);
            return null;
        }
    }

    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });
    const client = useApolloClient();

    if (error) {
        console.error('Error fetching repositories:', error);
    }

    // Return the repositories from data or an empty object as a fallback.
    const repositories = data ? data.repositories : {};

    return { repositories, loading, error, refetch, fetchRepository, fetchReviews };
};

export default useRepositories;
