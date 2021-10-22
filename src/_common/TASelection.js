import React from 'react';
import { gql, useQuery } from '@apollo/client';
import initialData from '../util/initialData';

const onlyUnique = (value, index, selfData) => {
  return selfData.indexOf(value) === index;
}

let traditionalAuthoritysData = []

const gettraditionalAuthoritys = (data) => {
  data.map((item) => {
    traditionalAuthoritysData.push(item.traditional_authority)
  })
}

gettraditionalAuthoritys(initialData);

const traditionalAuthoritys = traditionalAuthoritysData.filter(onlyUnique);

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select traditionalAuthority...</option>];
  items.map((item, i) => {
      list.push(<option value={item} key={i+1}>{item}</option>);
   } )
  return list
}


const TASelection = () => {
  const { loading, error, data } = useQuery(GET_TAS_QUERY);

  if (loading) return `Loading...`;
  if (error) return `Error! ${error.message}`;

  const tAOptionsToSelectFrom = selectionListGeneratorService(traditionalAuthoritys);

  return(
    <>
      {tAOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default TASelection;
