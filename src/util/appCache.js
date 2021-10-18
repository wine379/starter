import {makeVar, InMemoryCache} from "@apollo/client";

export const householdsSearchOptionsVar = makeVar();
export const householdsVar = makeVar([]);
export const householdsSearchResults = makeVar([]);

export const newlyRegisteredHouseholdsVar = makeVar([]);
export const approvedHouseholdsVar = makeVar([]);
export const enrolledHouseholdsVar = makeVar([]);

export const selectAllVar  = makeVar(false);

export const checkedListAllVar = makeVar([]);
export const householdsCheckedVar = makeVar();

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
          },
          checkedListAll: {
              read() {
                  return checkedListAllVar();
              }
          },
          householdsChecked: {
            read() {
                return householdsCheckedVar();
            }
        },
          households: {
            read() {
                return householdsVar();
            }
        },
          newHouseholds: {
              read() {
                  return newlyRegisteredHouseholdsVar();
              }
          },
          approvedHouseholds: {
              read() {
                  return approvedHouseholdsVar();
              }
          },
          enrolledHouseholds: {
              read() {
                  return enrolledHouseholdsVar();
              }
          },
          householdsSearchOptions: {
              read() {
                  return householdsSearchOptionsVar();
              }
          },
          selectAll: {
              read() {
                  return selectAllVar();
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
      }
    }
  })

export default appCache
