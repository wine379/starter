import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_STRUCTURE_LOCATION_ZONE_QUERY = gql`
  query GetStructureLocationZone {
    HouseholdStructureLocationZone {
      household_structure_location_zone_code
      household_structure_location_zone_name
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select zone...</option>];
  items.map((item, i) => {
      list.push(<option value={item.household_structure_location_zone_code} key={i+1}>{item.household_structure_location_zone_name}</option>);
   } )

  return list
}

const StructureLocationZone = () => {
    const { loading, error, data } = useQuery(GET_STRUCTURE_LOCATION_ZONE_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const structureLocationZonesOptionsToSelectFrom = selectionListGeneratorService(data.HouseholdStructureLocationZone);

    return(
        <>
          {structureLocationZonesOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default StructureLocationZone
