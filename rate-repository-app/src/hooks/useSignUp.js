import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../graphql/mutations";

const useSignUp = () => {
    const [mutate, result] = useMutation(CREATE_USER);

    const signUp = async ({ username, password }) => {

        console.log('signUp function called');

        const user= {
            username,
            password
        };

        try {
            return await mutate({variables: { user }});
        } catch (error) {
            console.error('Error in signUp function', error);
        }
    };

    return [signUp, result];
};

export default useSignUp;
