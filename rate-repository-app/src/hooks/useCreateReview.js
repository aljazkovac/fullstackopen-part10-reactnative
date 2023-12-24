import {useMutation} from "@apollo/client";
import {GET_USER} from "../graphql/queries";
import {CREATE_REVIEW} from "../graphql/mutations";

const useCreateReview = () => {
    
    const [mutate, result] = useMutation(CREATE_REVIEW);
    const createReview = async ({ownerName, repoName, rating, reviewText}) => {
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
    
    return {createReview, result};
}

export default useCreateReview;