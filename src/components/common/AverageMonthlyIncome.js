import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_AVERAGE_MONTHLY_INCOME_QUERY = gql`
  query GetAverageMonthlyIncome {
    AverageMonthlyIncomeRange {
      average_monthly_income_range
      average_monthly_income_range_code
    }
  }
`;

const selectionListGeneratorService = (optsArr) => {
  const items = optsArr;
  let list = [<option key={0}>Select category...</option>];
  items.map((item, i) => {
      list.push(<option value={item.average_monthly_income_range_code} key={i+1}>{item.average_monthly_income_range}</option>);
   } )

  return list
}

const AverageMonthlyIncome = () => {
    const { loading, error, data } = useQuery(GET_AVERAGE_MONTHLY_INCOME_QUERY);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const avarageMonthlyIncomesOptionsToSelectFrom = selectionListGeneratorService(data.AverageMonthlyIncomeRange);

    return(
        <>
          {avarageMonthlyIncomesOptionsToSelectFrom.map((e) => { 
                                                return e 
                                                })
                                            } 
          
        </>
    );
}



export default AverageMonthlyIncome
