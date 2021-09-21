import React from 'react';
import { gql, useQuery } from '@apollo/client';

//IMPORTING COMPONENTS
import Loader from './Loader';

const GET_USER_QUERY = gql`
  query GetUser {
    User {
      user_name
      first_name
      last_name
      full_name @client
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select user...</option>];
  items.map((item, i) => {
      list.push(<option value={item.user_name} key={i+1}>{item.full_name}</option>);
   } )

  return list
}

const UsersSelection = () => {
    const { loading, error, data } = useQuery(GET_USER_QUERY);
    
    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    const userOptionsToSelectFrom = selectionListGeneratorService(data.User);

    return(
        <>
          {userOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default UsersSelection






