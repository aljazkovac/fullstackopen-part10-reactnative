import {useQuery} from "@apollo/client";
import {GET_REVIEWS} from "../graphql/queries";

const useReviews = (id, first) => {
    
    const { data, loading, error, refetch, fetchMore } = useQuery(GET_REVIEWS, {
        variables: { id, first },
        fetchPolicy: 'network-only',
    });
    
    if (error) {
        console.error('Error fetching reviews:', error);
    }
    
    const reviews = data ? data.repository.reviews : {};

    // console.log('reviews', reviews);
    
    const handleFetchMore = () => {
        const canFetchMore =
            !loading && data && data.repository.reviews.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
            return;
        }

        console.log('can fetch more reviews');
    
        fetchMore({
            query: GET_REVIEWS,
            variables: {
                id,
                first,
                after: data.repository.reviews.pageInfo.endCursor,
            },
        });
    }
    
    return { reviews, loading, error, refetch, fetchMore: handleFetchMore };
};

export default useReviews;
