import {useMutation} from "@apollo/client";
import {AUTHENTICATE} from "../graphql/mutations";
import  useAuthStorage from "../hooks/useAuthStorage";
import {useApolloClient} from "@apollo/client";

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const client = useApolloClient();
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        console.log('signIn function called');
        try {
            const response = await mutate({variables: {username, password}});

            const accessToken = response.data.authenticate.accessToken;
            console.log('accessToken', accessToken);
            await authStorage.setAccessToken(accessToken);

            //const retrievedToken = await authStorage.getAccessToken();
            //console.log("Retrieved token:", retrievedToken);

            await client.resetStore();

            return response;
        } catch (error) {
            console.error('Error in signIn function', error);
        }
    };

    return [signIn, result];
};

export default useSignIn;
