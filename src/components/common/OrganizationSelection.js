import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_ORGANIZATION_QUERY = gql`
  query GetOrganization {
    Organization {
        organization_code
        organization_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select organization...</option>];
  items.map((item, i) => {
      list.push(<option value={item.organization_code} key={i+1}>{item.organization_name}</option>);
   } )

  return list
}

const OrganizationSelection = () => {
    const { loading, error, data } = useQuery(GET_ORGANIZATION_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const structureOrganizationToSelectFrom = selectionListGeneratorService(data.Organization);

    return(
        <>
          {structureOrganizationToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
        )
}

export default OrganizationSelection
