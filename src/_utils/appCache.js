import {makeVar, InMemoryCache} from "@apollo/client";

export const regionsVar = makeVar();
export const districtsVar = makeVar();
export const traditionalAuthoritiesVar = makeVar();
export const clustersVar = makeVar();
export const groupsVar = makeVar();
export const filteredGroupsVar = makeVar();

const appCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          regions: {
            read(){
              return regionsVar();
            }

          },
          districts: {
              read() {
                  return districtsVar();
              }
          },
          traditionalAuthorities: {
              read() {
                  return traditionalAuthoritiesVar();
              }
          },
          clusters: {
              read() {
                  return clustersVar();
              }
          },
          groups: {
              read() {
                  return groupsVar();
              }
          },
          filteredGroupsBy: {
              read() {
                  return groupfilteredGroupsVarsVar();
              }
          }
        }
      }
    }
  })

export default appCache
