import React, {useState, useEffect} from 'react';
import { gql, useQuery } from '@apollo/client';

//IMPORTING COMPONENTS
import ProspectiveBeneficiaries from './ProspectiveBeneficiaries';
import Loader from '../common/Loader';
import {householdsVar} from '../../util/appCache';

const GET_BENEFICIARIES_QUERY = gql`
  query GetBeneficiaries {
    Household {
      ward
      wards {
          ward_code
          ward_name
      }
      areas {
          area_code
          area_name
      }
      household_block_name
      household_code
      users {
          user_name
          first_name
          last_name
      }
      phones {
        phone
      }
    }
  }
`;


const BTBeneficiariesElement = () => {
    const { loading, error, data } = useQuery(GET_BENEFICIARIES_QUERY);

    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    const resultData = data;
    householdsVar(resultData.Household);

    return(
        <>
            <ProspectiveBeneficiaries />
        </>
    )
}

export default BTBeneficiariesElement
