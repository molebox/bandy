const React = require("react");
import { FAUNA_SERVER } from "react-native-dotenv";
const {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} = require("@apollo/client");
const { setContext } = require("apollo-link-context");
const { createHttpLink } = require("apollo-link-http");
const fetch = require("isomorphic-fetch");

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
  fetch,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${FAUNA_SERVER}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Apollo = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
