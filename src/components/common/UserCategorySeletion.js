import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_USER_CATEGORY_QUERY = gql`
  query GetUserCategory {
    UserCategory{
        user_category_code
        user_category_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select category...</option>];
  items.map((item, i) => {
      list.push(<option value={item.user_category_code} key={i+1}>{item.user_category_name}</option>);
   } )

  return list
}

const UserCategorySeletion = () => {
    const { loading, error, data } = useQuery(GET_USER_CATEGORY_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const structureUserCategoryToSelectFrom = selectionListGeneratorService(data.UserCategory);

    return(
        <>
          {structureUserCategoryToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
        )
}

export default UserCategorySeletion
