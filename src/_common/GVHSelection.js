import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_GVHS_QUERY = gql`
  query GetGVHs {
    GroupVillageHead {
      gvh_code
      gvh_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select GVH...</option>];
  items.map((item, i) => {
      list.push(<option value={item.gvh_name} key={i+1}>{item.gvh_name}</option>);
   } )
  return list
}

const GVHSelection = () => {
  const { loading, error, data } = useQuery(GET_GVHS_QUERY);

  if (loading) return `Loading...`;
  if (error) return `Error! ${error.message}`;

  const gVHOptionsToSelectFrom = selectionListGeneratorService(data.GroupVillageHead);

  return(
    <>
      {gVHOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default GVHSelection;
