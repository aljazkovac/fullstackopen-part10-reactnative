import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from "expo-constants";

const env = Constants.manifest.extra.env;
const devServerUri = Constants.manifest.extra.devServerUri;
const prodServerUri = Constants.manifest.extra.prodServerUri;

const httpLink = createHttpLink({
    uri: env === "development" ? devServerUri : prodServerUri,
});

const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;