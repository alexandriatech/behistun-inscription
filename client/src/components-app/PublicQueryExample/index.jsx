import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_GREETING = gql`
  {
    greeting
  }
`;

const PublicQueryExample = () => {
  const { loading, error, data } = useQuery(GET_GREETING);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return `Good ${data.greeting}`;
};

export default PublicQueryExample;
