import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_VILLAGES_QUERY = gql`
  query GetVillages {
    Village {
      village_code
      village_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select Village...</option>];
  items.map((item, i) => {
      list.push(<option value={item.village_name} key={i+1}>{item.village_name}</option>);
   } )
  return list
}

const VillageSelection = () => {
  const { loading, error, data } = useQuery(GET_VILLAGES_QUERY);

  if (loading) return `Loading...`;
  if (error) return `Error! ${error.message}`;

  const villageOptionsToSelectFrom = selectionListGeneratorService(data.Village);

  return(
    <>
      {villageOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default VillageSelection;