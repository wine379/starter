import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_WARD_QUERY = gql`
  query GetWard {
    Ward {
      ward_name
      ward_code
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select ward...</option>];
  items.map((item, i) => {
      list.push(<option value={item.ward_name} key={i+1}>{item.ward_name}</option>);
   } )

  return list
}

const WardSelectionList = () => {
    const { loading, error, data } = useQuery(GET_WARD_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const wardOptionsToSelectFrom = selectionListGeneratorService(data.Ward);

    return(
        <>
          {wardOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default WardSelectionList

