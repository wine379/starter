import {makeVar, InMemoryCache} from "@apollo/client";

export const householdSearchVariables = makeVar();
export const householdsVar = makeVar([]);
export const householdsSearchResults = makeVar([]);

const appCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          sortedHouseholds: (existing, {readField}) => {
            const direction = sortOrder();
            const households = [...(readField("Household") || [])];

            return households.sort((a,b) => {
              const aName = readField('household_name', a);
              const bName = readField('household_name', b);
              if(direction === 'DESC') {
                if ( aName < bName ) return 1;
                if (aName > bName ) return -1;
                return 0;
              } else {
                if ( aName < bName ) return -1;
                if (aName > bName ) return 1;
                return 0;
              }
            })
          },
          household: {
            read: (existing, {toReference, args}) => {
              const countryRef = toReference({__typename: "Household", household_code: args.household_code})

              return existing ?? countryRef //Nullish coalescing operator
            }
          }
        }
      },
      User: {
        keyFields: ['user_name'],
        fields: {
          full_name: {
            read: (_, {readField}) => {
              const firstName = readField('first_name');
              const lastName = readField('last_name');

              return `${firstName} ${lastName}`;
            }
          }
        }
      },
      householdSearchFilterOptions: {
        read() {
          return householdSearchVariables();
        }
      },
      households: {
          read() {
              return householdsVar();
          }
      },
      householdsSearch: {
          read() {
            return householdsSearchResults();
          }
      }
    }
  })

export default appCache
