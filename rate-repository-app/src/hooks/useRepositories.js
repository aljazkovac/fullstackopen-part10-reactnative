import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    if (error) {
        console.error('Error fetching repositories:', error);
    }

    // Return the repositories from data or an empty object as a fallback.
    const repositories = data ? data.repositories : {};
    console.log('data', data)
    console.log('repositories', repositories)

    return { repositories, loading, refetch };
};

export default useRepositories;
