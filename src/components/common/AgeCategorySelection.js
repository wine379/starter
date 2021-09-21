import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_AGE_CATEGORY_QUERY = gql`
  query GetAgeCategory {
    AgeCategory {
      age_category_code
      age_category_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select category...</option>];
  items.map((item, i) => {
      list.push(<option value={item.age_category_code} key={i+1}>{item.age_category_name}</option>);
   } )

  return list
}

const AgeCategorySelection = () => {
    const { loading, error, data } = useQuery(GET_AGE_CATEGORY_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const ageCategoriesOptionsToSelectFrom = selectionListGeneratorService(data.AgeCategory);

    return(
        <>
          {ageCategoriesOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default AgeCategorySelection

