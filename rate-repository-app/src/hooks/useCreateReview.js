import {useMutation} from "@apollo/client";
import {CREATE_REVIEW} from "../graphql/mutations";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repoName, rating, reviewText }) => {
        console.log('createReview function called');
        try {
            return await mutate({variables: {ownerName, repoName, rating, reviewText}});
        } catch (error) {
            console.error('Error in createReview function', error);
        }
    };

    return [createReview, result];
};

export default useCreateReview;
