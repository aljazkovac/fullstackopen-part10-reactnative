import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
    });

    if (error) {
        console.error('Error fetching repositories:', error);
    }

    // Return the repositories from data or an empty object as a fallback.
    const repository = data ? data.repository : {};
    console.log('data', data)
    console.log('repository', repository)

    return { repository, loading, refetch };
};

export default useRepository;
