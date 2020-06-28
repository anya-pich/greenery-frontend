import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { endpoint } from '../config';
 
export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);