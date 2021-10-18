import {gql} from '@apollo/client'
// export const REACT_APP_GRAPHQL_URI =  process.env.REACT_APP_GRAPHQL_URI || 'http://67.205.136.132:4001/graphql';

export const REACT_APP_GRAPHQL_URI =  process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql';

// Search queries

export const FETCH_USERS_LIST_QUERY = `
  {
    User {
      first_name
      last_name
      phones {
        phone
      }
      usercategorys {
        user_category_name
      }
    }
  }
`;

export const FETCH_PRODUCTS_LIST_QUERY = `
  {
    Product {
      product_code
      product_description
      product_cost
      product_image_file_path
      product_name
    }
  }
`;

export const FETCH_CONTRACTOR_LIST_QUERY = `
  {
    Contractor {
      contractor_code
      contractor_name
      contractor_postal_address
      emails {
        email
      }
      phones {
        phone
      }
    }
  }
`;

export const FETCH_BENEFICIARY_LIST_QUERY = `
  {
    Household {
      wards {
        ward_name
      }
      areas {
        area_name
      }
      household_block_name
      household_code
      household_name
      phones {
        phone
      }
    }
  }
`;

export const FETCH_WARD_NAMES_QUERY = `
  {
    Ward {
      ward_name
      ward_code
    }
  }
`;

export const FETCH_AREA_NAMES_QUERY = `
  {
    Area {
      area_code
      area_name
    }
  }
`;

export const HOUSEHOLD_HEAD_AGE_CATEGORIES_QUERY = `
  {
    AgeCategory {
      household_head_age_category_code
      household_head_age_category_name
    }
  }
`;

export const MAIN_SOURCE_OF_LIVELIHOODS_QUERY = `
  {
    MainSourceOfLivelihood {
      main_source_of_livelihood_code
      main_source_of_livelihood_name
    }
  }
`;

export const HOUSEHOLD_AVERAGE_MONTHLY_INCOME_QUERY = `
  {
    AverageMonthlyIncomeRange {
      average_monthly_income_range
      average_monthly_income_range_code
    }
  }
`;

export const HOUSEHOLD_HOME_OWNERSHIP_STATUS_QUERY = `
  {
    HouseholdHomeOwnershipStatus {
      household_home_ownership_status_code
      household_home_ownership_status_name
    }
  }
`;

export const HOUSEHOLD_STRUCTURE_LOCATION_ZONE_QUERY = `
  {
    HouseholdStructureLocationZone {
      household_structure_location_zone_code
      household_structure_location_zone_name
    }
  }
`;

export const LATRINES_QUERY = `
  {
    Latrine {
      latrine_code
      latrine_name
    }
  }
`;

//REACT APOLLO QUERIES

export const FETCH_HOUSEHOLDS_QUERY = gql`
  query FetchHouseholds{
    Household {
    ward
    area
    phone
    household_code
    household_block_name
    users {
      user_name
      first_name
      last_name
      full_name @client
      }
    enrollment_status
    }
  }
`;

export const GET_HOUSEHOLDS_QUERY = gql`
  query GetHouseholds{
    households @client
  }
`;

export const GET_NEW_HOUSEHOLDS_QUERY = gql`
  query GetNewHouseholds{
    newHouseholds @client
  }
`;

export const GET_APPROVED_HOUSEHOLDS_QUERY = gql`
  query GetApprovedHouseholds{
    approvedHouseholds @client
  }
`;

export const GET_ENROLLED_HOUSEHOLDS_QUERY = gql`
  query GetEnrolledHouseholds{
    enrolledHouseholds @client
  }
`;

export const GET_HOUSEHOLDS_SEARCH_OPTIONS_QUERY = gql`
  query GetHouseholdsSearchOptions{
    householdsSearchOptions @client
  }
`;

export const GET_SELECT_ALL_QUERY = gql`
  query GetSelect{
    selectAll @client
  }
`;

export const GET_CHECKED_LIST_ALL_QUERY = gql`
  query GetCheckedListAll{
    checkedListAll @client
  }
`;

export const GET_HOUSEHOLDS_CHECKED_QUERY = gql`
  query GetHouseholdsChecked{
    householdsChecked @client
  }
`;

export const CREATE_BENEFICIARY_QUERY = gql`
  mutation CreateHousehold(
  $ward: ID!
  $area: ID!
  $ageCategory: ID!
  $monthlyIncomeRange: ID!
  $homeOwnershipCategory: ID!
  $latrineType: ID!
  $mainSourceOfLivelihood: ID!
  $structureLocationZone: ID!
  $blockName: String!
  $plotNumber: String!
  $phoneNumber: String!
  $householdName: String!
  $isPoorHousehold: String!
  $isVulnerableHousehold: String!
  $willHouseholdPayFullForOSS: String!
  $householdCode: String!
  $householdAdminNote: String!

  ){
    createBeneficiary(
      householdPhone: $phoneNumber
      householdCode: $householdCode
      householdAdminNote: $householdAdminNote
      blockName: $blockName
      plotNumber: $plotNumber
      householdName: $householdName
      isPoor: $isPoorHousehold
      isVulnerable: $isVulnerableHousehold
      willPayInFull: $willHouseholdPayFullForOSS
      ageCategory : $ageCategory
      area : $area
      avarageMonthlyIncomes : $monthlyIncomeRange
      homeOwnershipCategories : $homeOwnershipCategory
      latrine : $latrineType
      mainSourceOfLivelihoodCategory : $mainSourceOfLivelihood
      structureLocationZones : $structureLocationZone
      ward : $ward
   ){
     Household
   }
  }
`;
