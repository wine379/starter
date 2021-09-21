import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_HOME_OWNERSHIP_QUERY = gql`
  query GetHomeOwnership {
    HouseholdHomeOwnershipStatus {
      household_home_ownership_status_code
      household_home_ownership_status_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select category...</option>];
  items.map((item, i) => {
      list.push(<option value={item.household_home_ownership_status_code} key={i+1}>{item.household_home_ownership_status_name}</option>);
   } )

  return list
}

const HomeOwnership = () => {
    const { loading, error, data } = useQuery(GET_HOME_OWNERSHIP_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const homeOwnershipCategoriesOptionsToSelectFrom = selectionListGeneratorService(data.HouseholdHomeOwnershipStatus);

    return(
        <>
          {homeOwnershipCategoriesOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default HomeOwnership

