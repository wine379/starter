import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_AREAS_QUERY = gql`
  query GetAreas {
    Area {
      area_code
      area_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select area...</option>];
  items.map((item, i) => {
      list.push(<option value={item.area_name} key={i+1}>{item.area_name}</option>);
   } )

  return list
}

const AreaSelection = () => {
    const { loading, error, data } = useQuery(GET_AREAS_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const areaOptionsToSelectFrom = selectionListGeneratorService(data.Area);

    return(
        <>
          {areaOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default AreaSelection
