import  useAuthStorage from "../hooks/useAuthStorage";
import {useApolloClient} from "@apollo/client";

const useUser = () => {
    const authStorage = useAuthStorage();
    const client = useApolloClient();

    const signOut = async () => {
        try {
            await authStorage.removeAccessToken();
            await client.resetStore();
        } catch (error) {
            console.error('Error in SignOut function', error);
        }
    };

    return [signOut];
};

export default useUser;
