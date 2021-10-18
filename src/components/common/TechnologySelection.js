import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_TECHNOLOGIES_QUERY = gql`
  query GetTechnologies {
    Product {
      product_code
      product_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select livelihood...</option>];
  items.map((item, i) => {
      list.push(<option value={item.product_code} key={i+1}>{item.product_name}</option>);
   } )

  return list
}

const TechnologySelection = () => {

    const { loading, error, data } = useQuery(GET_TECHNOLOGIES_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const technologyOptionsToSelectFrom = selectionListGeneratorService(data.Product);

    return(
        <>
          {technologyOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}

export default TechnologySelection
