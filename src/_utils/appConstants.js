import {gql} from '@apollo/client';
// export const REACT_APP_GRAPHQL_URI =  process.env.REACT_APP_GRAPHQL_URI || 'http://67.205.136.132:4001/graphql';

// export const REACT_APP_GRAPHQL_URI =  process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql';/

export const REACT_APP_GRAPHQL_URI =  process.env.REACT_APP_GRAPHQL_URI || 'https://api.mocki.io/playground?endpoint=https://api.mocki.io/v2/c4d7a195/graphql'

// Search queries

export const FETCH_GROUPS_QUERY = gql`
  {
    groups @client
  }
`;

export const FETCH_FILTERED_GROUPS_QUERY = gql`
  {
    filteredGroups @client
  }
`;

