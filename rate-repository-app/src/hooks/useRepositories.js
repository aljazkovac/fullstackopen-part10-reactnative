import { useQuery, useApolloClient } from '@apollo/client';
import { GET_REPOSITORIES, GET_REPOSITORY } from '../graphql/queries';

const useRepositories = () => {
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });
    const client = useApolloClient();

    // Function to fetch a single repository by ID using Apollo Client directly.
    const fetchRepository = async (id) => {
        try {
            const { data } = await client.query({
                query: GET_REPOSITORY,
                variables: { id }, // Replace with your actual variable name and query
                fetchPolicy: 'network-only', // You might want to use 'network-only' to always fetch the latest data
            });
            return data.repository; // Or however the data is structured
        } catch (e) {
            console.error('Error fetching single repository:', e);
            return null;
        }
    };

    if (error) {
        console.error('Error fetching repositories:', error);
    }

    // Return the repositories from data or an empty object as a fallback.
    const repositories = data ? data.repositories : {};
    console.log('data', data);
    console.log('repositories', repositories);

    // Return both the list of repositories and the function to fetch a single one
    return { repositories, loading, refetch, fetchRepository };
};

export default useRepositories;
