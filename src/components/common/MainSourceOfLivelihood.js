import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MAIN_SOURCE_OF_LIVELIHOOD_QUERY = gql`
  query GetMainSourceOfLivelihood {
    MainSourceOfLivelihood {
      main_source_of_livelihood_code
      main_source_of_livelihood_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select livelihood...</option>];
  items.map((item, i) => {
      list.push(<option value={item.main_source_of_livelihood_code} key={i+1}>{item.main_source_of_livelihood_name}</option>);
   } )

  return list
}

const MainSourceOfLivelihood = () => {
    const { loading, error, data } = useQuery(GET_MAIN_SOURCE_OF_LIVELIHOOD_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const mainSourceOfLivelihoodCategoriesOptionsToSelectFrom = selectionListGeneratorService(data.MainSourceOfLivelihood);

    return(
        <>
          {mainSourceOfLivelihoodCategoriesOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default MainSourceOfLivelihood
