import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'https://0212-98-128-229-35.ngrok.io/graphql',
});

const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;