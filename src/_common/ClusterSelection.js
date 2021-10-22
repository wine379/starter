import React from 'react';
import { gql, useQuery } from '@apollo/client';
import initialData from '../util/initialData';

const onlyUnique = (value, index, selfData) => {
  return selfData.indexOf(value) === index;
}

let clustersData = []

const getclusters = (data) => {
  data.map((item) => {
    clustersData.push(item.cluster)
  })
}

getclusters(initialData);

const clusters = clustersData.filter(onlyUnique);

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select cluster...</option>];
  items.map((item, i) => {
      list.push(<option value={item} key={i+1}>{item}</option>);
   } )
  return list
}

const ClusterSelection = () => {
  // const { loading, error, data } = useQuery(GET_CLUSTERS_QUERY);

  // if (loading) return `Loading...`;
  // if (error) return `Error! ${error.message}`;

  const clusterOptionsToSelectFrom = selectionListGeneratorService(clusters);

  return(
    <>
      {clusterOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default ClusterSelection;
