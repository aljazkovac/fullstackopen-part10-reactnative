import {useMutation} from "@apollo/client";
import {AUTHENTICATE} from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        console.log('signIn function called'); // <-- First log
        try {
            const response = await mutate({variables: {username, password}});
            console.log('response', response); // <-- Second log
            return response;
        } catch (error) {
            console.error('Error in signIn function', error); // <-- Error log
        }
    };

    return [signIn, result];
};

export default useSignIn;
