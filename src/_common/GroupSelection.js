import React from 'react';
import { gql, useQuery } from '@apollo/client';
import initialData from '../util/initialData';

const onlyUnique = (value, index, selfData) => {
  return selfData.indexOf(value) === index;
}

let group_namesData = []

const getgroup_names = (data) => {
  data.map((item) => {
    group_namesData.push(item.group_name)
  })
}

getgroup_names(initialData);

const group_names = group_namesData.filter(onlyUnique);

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select group_name...</option>];
  items.map((item, i) => {
      list.push(<option value={item} key={i+1}>{item}</option>);
   } )
  return list
}
const group_nameSelection = () => {
  // const { loading, error, data } = useQuery(GET_group_nameS_QUERY);

  // if (loading) return `Loading...`;
  // if (error) return `Error! ${error.message}`;

  const group_nameOptionsToSelectFrom = selectionListGeneratorService(group_names);

  return(
    <>
      {group_nameOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default group_nameSelection;