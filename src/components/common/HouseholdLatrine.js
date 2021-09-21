import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_LATRINE_QUERY = gql`
  query GetLatrine {
    Latrine {
      latrine_code
      latrine_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select Latrine Type...</option>];
  items.map((item, i) => {
      list.push(<option value={item.latrine_code} key={i+1}>{item.latrine_name}</option>);
   } )

  return list
}

const HouseholdLatrine = () => {
    const { loading, error, data } = useQuery(GET_LATRINE_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const householdLatrinesOptionsToSelectFrom = selectionListGeneratorService(data.Latrine);

    return(
        <>
          {householdLatrinesOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default HouseholdLatrine
