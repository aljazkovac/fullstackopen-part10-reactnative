import {useMutation} from "@apollo/client";
import {CREATE_REVIEW} from "../graphql/mutations";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repoName, rating, reviewText }) => {
        console.log('createReview function called');

        const review = {
            ownerName,
            repositoryName: repoName,
            rating: parseInt(rating),
            text: reviewText
        };

        try {
            return await mutate({variables: { review }});
        } catch (error) {
            console.error('Error in createReview function', error);
        }
    };

    const resetError = () => {
        result.error = null;
    };

    return [createReview, result, resetError];
};

export default useCreateReview;
