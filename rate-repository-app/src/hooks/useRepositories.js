import { useQuery, useApolloClient } from '@apollo/client';
import { GET_REPOSITORIES, GET_REPOSITORY } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchQuery) => {
    
    const client = useApolloClient();
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

    // Fetch repositories from the GraphQL API
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy, orderDirection, searchQuery },
        fetchPolicy: 'cache-and-network',
    });

    if (error) {
        console.error('Error fetching repositories:', error);
    }

    const repositories = data ? data.repositories : {};

    return { repositories, loading, error, refetch, fetchRepository };
};

export default useRepositories;
