import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from "expo-constants";
import { setContext } from '@apollo/client/link/context';
import {relayStylePagination} from "@apollo/client/utilities";

const env = Constants.manifest.extra.env;
const devServerUri = Constants.manifest.extra.devServerUri;
const prodServerUri = Constants.manifest.extra.prodServerUri;

const httpLink = createHttpLink({
    uri: env === "development" ? devServerUri : prodServerUri,
});

let client;

const cache = new InMemoryCache({
  typePolicies: {
      Repository: {
          fields: {
              reviews: relayStylePagination(),
          },
      },
  },
});

export const initializeApolloClient = (authStorage) => {
    if (!client) {
        const authLink = setContext(async (_, { headers }) => {
            try {
                const accessToken = await authStorage.getAccessToken();
                return {
                    headers: {
                        ...headers,
                        authorization: accessToken ? `Bearer ${accessToken}` : '',
                    }
                };
            } catch (e) {
                console.log(e);
                return {
                    headers,
                };
            }
        });

        client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache,
        });
    }

    return client;
};
