import create from "zustand";
import * as Constants from '../constants/AppConstants';

let store = (set, get) => ({
  // USERS STATE

  users: [],
  usersLoading: [],
  usersError: '',
  fetchUsers: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.FETCH_USERS_LIST_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({users: result.data.User, usersLoading: false})).catch((err) => set({usersLoading: false, usersError: "Something went wrong..."}));

  },

  // PRODUCTS STATE

  products: [],
  productsLoading: [],
  productsError: '',
  fetchProducts: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.FETCH_PRODUCTS_LIST_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({products: result.data.Product, productsLoading: false})).catch((err) => set({productsLoading: false, productsError: "Something went wrong..."}));
  },
  
  // CONTRACTOR STATE
  
  allocatedAreas: [],

  contractors: [],
  contractorsLoading: true,
  contractorsError: '',
  fetchContractors: async () => {
    const url = Constants.REACT_APP_GRAPHQL_URI;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: Constants.FETCH_CONTRACTOR_LIST_QUERY}),
    })
      .then((res) => res.json())
      .then((result) => set({contractors: result.data.Contractor, contractorsLoading: false})).catch((err) => set({contractorsLoading: false, contractorsError: "Something went wrong..."}));
  }
});

const useSystemAdminStore = create(store);

export default useSystemAdminStore;