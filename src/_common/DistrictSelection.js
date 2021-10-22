import React from 'react';
import { gql, useQuery } from '@apollo/client';
import initialData from '../util/initialData';

const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter(unique)

console.log(uniqueAges)

const onlyUnique = (value, index, selfData) => {
  return selfData.indexOf(value) === index;
}

let districtsData = []

const getdistricts = (data) => {
  data.map((item) => {
    districtsData.push(item.district)
  })
}

getdistricts(initialData);

const districts = districtsData.filter(onlyUnique);

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select district...</option>];
  items.map((item, i) => {
      list.push(<option value={item} key={i+1}>{item}</option>);
   } )
  return list
}

console.log(districts)

const DistrictSelection = () => {
  // const { loading, error, data } = useQuery(GET_DISTRICTS_QUERY);

  // if (loading) return `Loading...`;
  // if (error) return `Error! ${error.message}`;

  const districtOptionsToSelectFrom = selectionListGeneratorService(districts);

  return(
    <>
      {districtOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default DistrictSelection;
