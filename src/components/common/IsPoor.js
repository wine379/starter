import React, {useEffect, useCallback} from 'react'
import useBeneficiaryStore from '../../stores/useBeneficiaryStore';

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select option...</option>];
  items.map((item, i) => {
      list.push(<option value={item} key={i+1}>{item}</option>);
   } )

  return list
}


  const IsPoor = () => {
    const selectionOptions = ["YES", "NO"];
    const selectionOptionsToSelectFrom = selectionListGeneratorService(selectionOptions);
    const setIsPoorHousehold = useBeneficiaryStore(state => state.setIsPoorHousehold);

    
    return (
      <>
        {selectionOptionsToSelectFrom.map((e, i) => { 
                                              return e
                                              })
                                          } 
        
      </>
    )
      
  }

export default IsPoor
