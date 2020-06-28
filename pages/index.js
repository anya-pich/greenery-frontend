import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
 
const QUERY = gql`
  {
    title
  }
`;
 
const Index = () => {
  const { loading, data } = useQuery(QUERY);
 
  if (loading || !data) {
    return <h1>loading...</h1>;
  }
  return <h1>{data.title}</h1>;
};
 
export default withApollo(Index);
