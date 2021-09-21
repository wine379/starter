import create from "zustand";
import * as Constants from '../constants/AppConstants';

let store = (set, get) => ({
  wardChoices: [],
  areaCode: [],
  ageCategory: [],
  monthlyIncomeRange: [],
  homeOwnershipCategory: [],
  latrineType: [],
  mainSourceOfLivelihood: [],
  structureLocationZone: [],

  specificHousehold: "H00001",
  getHousehold: async () => {
    const code = get().specificHousehold
    const url = Constants.REACT_APP_GRAPHQL_URI;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
        getSpecificHousehold(householdId: "${code}"){
          household_code
        }}
        `}),
    })
      .then((res) => res.json())
      .then((result) => console.log(result.data.getSpecificHousehold.household_code))

  },
  
  //CREATE BENEFICIARY IN STATE
  
  newHouseholdCode: '',
  newHouseholdCodeError: '',
  connectHouseholdToOtherPropetiesError: '',
  createBeneficiary: async () => {
    const householdConnector = get().connectHouseholdToOtherPropeties
    const householdPhone = get().createdPhoneNumber
    const householdCode = Date.now().toString(16).toUpperCase();
    const householdAdminNote = "New household";
    const blockName = get().householdBlockName;
    const plotNumber = get().householdPlotNumber;
    const householdName = get().householdName;
    const isPoor = get().isPoorHousehold;
    const isVulnerable = get().isVulnerableHousehold;
    const willPayInFull = get().willHouseholdPayFullForOSS;

    

    const url = Constants.REACT_APP_GRAPHQL_URI;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation {
            createBeneficiary(
              householdPhone: "${householdPhone}"
              householdCode: "${householdCode}"
              householdAdminNote: "${householdAdminNote}"
              blockName: "${blockName}"
              plotNumber: "${plotNumber}"
              householdName: "${householdName}"
              isPoor: "${isPoor}"
              isVulnerable: "${isVulnerable}"
              willPayInFull: "${willPayInFull}"
            ) {
              household_code
            }
          }
        `}),
    })
      .then((res) => res.json())
      .then((result) => householdConnector(result.data.createBeneficiary.household_code))
      .catch((err) =>  set({newHouseholdCodeError: "Something went wrong..."}));
      

  },
  connectHouseholdToOtherPropeties: async (code) => {
    const householdCode = code; 
    const ageCategory = get().selectedAgeCategory; 
    const area = get().selectedArea;
    const avarageMonthlyIncomes = get().selectedAvarageMonthlyIncomes;
    const homeOwnershipCategories = get().selectedHomeOwnershipCategories;
    const latrine = get().selectedLatrine;
    const mainSourceOfLivelihoodCategory = get().selectedMainSourceOfLivelihoodCategory;
    const structureLocationZones = get().selectedStructureLocationZones;
    const ward = get().selectedWard;

    const url = Constants.REACT_APP_GRAPHQL_URI;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        mutation {
          connectHousehold(
            householdCode: "${householdCode}"
            ageCategory: "${ageCategory}"
            area: "${area}"
            avarageMonthlyIncomes: "${avarageMonthlyIncomes}"
            homeOwnershipCategories: "${homeOwnershipCategories}"
            latrine: "${latrine}"
            mainSourceOfLivelihoodCategory: "${mainSourceOfLivelihoodCategory}"
            structureLocationZones: "${structureLocationZones}"
            ward: "${ward}"
          ) {
            household_code
          }
        }        
        `}),
    })
      .then((res) => res.json())
      .then((result) => console.log(result.data.getSpecificHousehold.household_code))
      .catch((err) =>  set({connectHouseholdToOtherPropetiesError: "Something went wrong..."}));
  },

  // AGE CATEGORIES STATE

  ageCategories: [],
  ageCategoriesIsLoading: '',
  ageCategoriesError: '',
  fetchAgeCategories: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.HOUSEHOLD_HEAD_AGE_CATEGORIES_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({ageCategories: result.data.AgeCategory, ageCategoriesIsLoading: false})).catch((err) => set({ageCategoriesIsLoading: false, ageCategoriesError: "Something went wrong..."}));
  },
  selectedAgeCategory: '',

  //AREAS STATE

  areas: [],
  areasIsLoading: '',
  areasError: '',
  fetchAreas: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.FETCH_AREA_NAMES_QUERY,
      }),
    })
      .then((res) => res.json())
      .then((result) => set({areas: result.data.Area, areasIsLoading: false})).catch((err) => set({areasIsLoading: false, areasError: "Something went wrong..."}));
  },
  selectedArea: '',

  // AVERAGE MONTHLY INCOME STATE

  avarageMonthlyIncomes: [],
  avarageMonthlyIncomesLoading: '',
  avarageMonthlyIncomesError: '',
  fetchAverageIncomes: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.HOUSEHOLD_AVERAGE_MONTHLY_INCOME_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({avarageMonthlyIncomes: result.data.AverageMonthlyIncomeRange, avarageMonthlyIncomesLoading: false})).catch((err) => set({avarageMonthlyIncomesLoading: false, avarageMonthlyIncomesError: "Something went wrong..."}));
  },
  selectedAvarageMonthlyIncomes: '',

  // REGISTERED BENEFICIARIES STATE

  beneficiaries: [],
  beneficiariesLoading: '',
  beneficiariesError: '',
  fetchBeneficiaries: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.FETCH_BENEFICIARY_LIST_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({beneficiaries: result.data.Household, beneficiariesLoading: false})).catch((err) => set({beneficiariesLoading: false, beneficiariesError: "Something went wrong..."}));
  },
  selectedBeneficiary: {},

  // HOME OWNERSHIP STATUSES STATE

  homeOwnershipCategories: [],
  homeOwnershipCategoriesLoading: '',
  homeOwnershipCategoriesError: '',
  fetchHomeOwnershipCategories: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.HOUSEHOLD_HOME_OWNERSHIP_STATUS_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({homeOwnershipCategories: result.data.HouseholdHomeOwnershipStatus, homeOwnershipCategoriesLoading: false})).catch((err) => set({homeOwnershipCategoriesLoading: false, homeOwnershipCategoriesError: "Something went wrong..."}));
  },
  selectedHomeOwnershipCategories: '',

  // STATE FOR BASIC HOUSEHOLD INFORMATION

  householdLatrines: [],
  householdLatrinesLoading: '',
  householdLatrinesError: '',
  fetchHouseholdLatrines: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.LATRINES_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({householdLatrines: result.data.Latrine, householdLatrinesLoading: false})).catch((err) => set({householdLatrinesLoading: false, householdLatrinesError: "Something went wrong..."}));
  },
  selectedLatrine: '',
  
  householdPhone: '',
  householdPlotNumber: '',
  householdBlockName: '',
  householdName: '',
  isVulnerableHousehold: '',
  isPoorHousehold: '',
  willPayFullForOSS: '',

  // MAIN SOURCE OF LIVELIHOOD STATE

  mainSourceOfLivelihoodCategories: [],
  mainSourceOfLivelihoodCategoriesLoading: '',
  mainSourceOfLivelihoodCategoriesError: '',
  fetchLivelihooSources: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.MAIN_SOURCE_OF_LIVELIHOODS_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({mainSourceOfLivelihoodCategories: result.data.MainSourceOfLivelihood, mainSourceOfLivelihoodCategoriesLoading: false})).catch((err) => set({mainSourceOfLivelihoodCategoriesLoading: false, mainSourceOfLivelihoodCategoriesError: "Something went wrong..."}));
  },
  selectedMainSourceOfLivelihoodCategory: '',

  // STRUCTURE LOCATION ZONES STATE

  structureLocationZones: [],
  structureLocationZonesLoading: '',
  structureLocationZonesError: '',
  fetchStructureLocationZones: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.HOUSEHOLD_STRUCTURE_LOCATION_ZONE_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({structureLocationZones: result.data.HouseholdStructureLocationZone, structureLocationZonesLoading: false})).catch((err) => set({structureLocationZonesLoading: false, structureLocationZonesError: "Something went wrong..."}));
  },
  selectedStructureLocationZones: '',

  // WARDS STATE

  wards: [],
  wardsIsLoading: true,
  wardsError: '',
  fetchWards: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.FETCH_WARD_NAMES_QUERY,
      }),
    })
      .then((res) => res.json())
      .then((result) => set({wards: result.data.Ward, wardsIsLoading: false})).catch((err) => set({wardsIsLoading: false, wardsError: "Something went wrong..."}));
  },
  selectedWard: '',

  // COMPONENT RESET FUNCTION

  resetVariables: () => set((state) =>({
    createdPhoneNumber: '',
    householdBlockName : '',
    householdName : '',
    householdPhone : '',
    householdPlotNumber : '',
    isPoorHousehold : -1,
    isVulnerableHousehold : -1,
    selectedAgeCategory : -1,
    selectedArea : -1,
    selectedAvarageMonthlyIncomes : -1,
    selectedHomeOwnershipCategories : -1,
    selectedLatrine : -1,
    selectedMainSourceOfLivelihoodCategory : -1,
    selectedStructureLocationZones : -1,
    selectedWard : -1,
    willHouseholdPayFullForOSS : -1
  })),

  // SIDE MENU STATE  
  
  sideMenu: true,
  setSideMenu: () => set((state) => ({ sideMenu: !!!state.sideMenu })),

});

const useRegistrationStore = create(store);

export default useRegistrationStore;
