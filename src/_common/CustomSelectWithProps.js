import React from 'react';

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select option...</option>];
  items.map((item, i) => {
      list.push(<option value={item.item_name} key={i+1}>{item.item_name}</option>);
   } )
  return list
}

const CustomSelectWithProps = (props) => {
  const data = props.elements;
  let selectionList = [];
  data.map((element) => {
    selectionList.push({"item_name": element})
  })

  const trainingOptionsToSelectFrom = selectionListGeneratorService(selectionList);

  return(
    <>
      {trainingOptionsToSelectFrom.map((e) => { 
                                            return e 
                                            })
                                        } 
      
    </>
  );
}

export default CustomSelectWithProps;
