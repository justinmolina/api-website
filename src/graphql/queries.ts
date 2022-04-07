/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBetaUser = /* GraphQL */ `
  query GetBetaUser($id: ID!) {
    getBetaUser(id: $id) {
      id
      storeName
      storeAddress
      emailAddress
      Date
      description
      currentWebsite
      currentWebsiteArchitecture
      createdAt
      updatedAt
    }
  }
`;
export const listBetaUsers = /* GraphQL */ `
  query ListBetaUsers(
    $filter: ModelBetaUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBetaUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeName
        storeAddress
        emailAddress
        Date
        description
        currentWebsite
        currentWebsiteArchitecture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
