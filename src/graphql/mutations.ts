/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBetaUser = /* GraphQL */ `
  mutation CreateBetaUser(
    $input: CreateBetaUserInput!
    $condition: ModelBetaUserConditionInput
  ) {
    createBetaUser(input: $input, condition: $condition) {
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
export const updateBetaUser = /* GraphQL */ `
  mutation UpdateBetaUser(
    $input: UpdateBetaUserInput!
    $condition: ModelBetaUserConditionInput
  ) {
    updateBetaUser(input: $input, condition: $condition) {
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
export const deleteBetaUser = /* GraphQL */ `
  mutation DeleteBetaUser(
    $input: DeleteBetaUserInput!
    $condition: ModelBetaUserConditionInput
  ) {
    deleteBetaUser(input: $input, condition: $condition) {
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
