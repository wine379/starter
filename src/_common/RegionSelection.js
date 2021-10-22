import React from 'react';
import { useQuery } from '@apollo/client';
import initialData from '../util/initialData';
import { FETCH_FILTERED_GROUPS_QUERY } from '../_utils/appConstants';

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select region...</option>];
  items.map((item, i) => {
      list.push(<option value={item} key={i+1}>{item}</option>);
   } )
  return list
}


const RegionSelection = () => {
  const { loading, error, data } = useQuery(GET_REGIONS_QUERY);

  if (loading) return `Loading...`;
  if (error) return `Error! ${error.message}`;

  let regionsData = []

  const getRegions = (data) => {
    data.map((item) => {
      regionsData.push(item.region)
    })
  }

  const onlyUnique = (value, index, selfData) => {
  return selfData.indexOf(value) === index;
  }

  getRegions(data);

  const regions = regionsData.filter(onlyUnique);

  const regionOptionsToSelectFrom = selectionListGeneratorService(regions);

  return(
    <>
      {regionOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default RegionSelection;
