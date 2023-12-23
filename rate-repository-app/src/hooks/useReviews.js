import {useApolloClient, useMutation} from "@apollo/client";
import {CREATE_REVIEW} from "../graphql/mutations";
import {GET_REVIEWS, GET_USER} from "../graphql/queries";

const useReviews = () => {

    const client = useApolloClient();
    const [mutate, result] = useMutation(CREATE_REVIEW);
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

    const createReview = async ({ownerName, repoName, rating, reviewText}) => {
        console.log('createReview function called');

        const review = {
            ownerName,
            repositoryName: repoName,
            rating: parseInt(rating),
            text: reviewText
        };

        try {
            return await mutate({
                variables: {review},
                refetchQueries: [{query: GET_USER, variables: {includeReviews: true}}]
            })
        } catch (error) {
            console.error('Error in createReview function', error);
        }
    };

    return {createReview, fetchReviews, result};
};

export default useReviews;
