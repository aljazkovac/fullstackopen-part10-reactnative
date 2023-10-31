import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from "expo-constants";
import Main from './src/components/Main';
import { initializeApolloClient }from './src/utils/apolloClient';
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();
const client = initializeApolloClient(authStorage);

const App = () => {
    console.log('Constants.manifest', Constants.manifest)
    console.log('ApolloClient', client.link)
    return (
        <NativeRouter>
            <ApolloProvider client={client}>
                <AuthStorageContext.Provider value={authStorage}>
                <Main />
                </AuthStorageContext.Provider>
            </ApolloProvider>
        </NativeRouter>
    );
};

export default App;