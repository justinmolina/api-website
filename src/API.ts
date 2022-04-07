/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBetaUserInput = {
  id?: string | null,
  storeName: string,
  storeAddress: string,
  emailAddress: string,
  Date: string,
  description?: string | null,
  currentWebsite: string,
  currentWebsiteArchitecture?: string | null,
};

export type ModelBetaUserConditionInput = {
  storeName?: ModelStringInput | null,
  storeAddress?: ModelStringInput | null,
  emailAddress?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  currentWebsite?: ModelStringInput | null,
  currentWebsiteArchitecture?: ModelStringInput | null,
  and?: Array< ModelBetaUserConditionInput | null > | null,
  or?: Array< ModelBetaUserConditionInput | null > | null,
  not?: ModelBetaUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type BetaUser = {
  __typename: "BetaUser",
  id: string,
  storeName: string,
  storeAddress: string,
  emailAddress: string,
  Date: string,
  description?: string | null,
  currentWebsite: string,
  currentWebsiteArchitecture?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBetaUserInput = {
  id: string,
  storeName?: string | null,
  storeAddress?: string | null,
  emailAddress?: string | null,
  Date?: string | null,
  description?: string | null,
  currentWebsite?: string | null,
  currentWebsiteArchitecture?: string | null,
};

export type DeleteBetaUserInput = {
  id: string,
};

export type ModelBetaUserFilterInput = {
  id?: ModelIDInput | null,
  storeName?: ModelStringInput | null,
  storeAddress?: ModelStringInput | null,
  emailAddress?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  currentWebsite?: ModelStringInput | null,
  currentWebsiteArchitecture?: ModelStringInput | null,
  and?: Array< ModelBetaUserFilterInput | null > | null,
  or?: Array< ModelBetaUserFilterInput | null > | null,
  not?: ModelBetaUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBetaUserConnection = {
  __typename: "ModelBetaUserConnection",
  items:  Array<BetaUser >,
  nextToken?: string | null,
};

export type CreateBetaUserMutationVariables = {
  input: CreateBetaUserInput,
  condition?: ModelBetaUserConditionInput | null,
};

export type CreateBetaUserMutation = {
  createBetaUser?:  {
    __typename: "BetaUser",
    id: string,
    storeName: string,
    storeAddress: string,
    emailAddress: string,
    Date: string,
    description?: string | null,
    currentWebsite: string,
    currentWebsiteArchitecture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBetaUserMutationVariables = {
  input: UpdateBetaUserInput,
  condition?: ModelBetaUserConditionInput | null,
};

export type UpdateBetaUserMutation = {
  updateBetaUser?:  {
    __typename: "BetaUser",
    id: string,
    storeName: string,
    storeAddress: string,
    emailAddress: string,
    Date: string,
    description?: string | null,
    currentWebsite: string,
    currentWebsiteArchitecture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBetaUserMutationVariables = {
  input: DeleteBetaUserInput,
  condition?: ModelBetaUserConditionInput | null,
};

export type DeleteBetaUserMutation = {
  deleteBetaUser?:  {
    __typename: "BetaUser",
    id: string,
    storeName: string,
    storeAddress: string,
    emailAddress: string,
    Date: string,
    description?: string | null,
    currentWebsite: string,
    currentWebsiteArchitecture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBetaUserQueryVariables = {
  id: string,
};

export type GetBetaUserQuery = {
  getBetaUser?:  {
    __typename: "BetaUser",
    id: string,
    storeName: string,
    storeAddress: string,
    emailAddress: string,
    Date: string,
    description?: string | null,
    currentWebsite: string,
    currentWebsiteArchitecture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBetaUsersQueryVariables = {
  filter?: ModelBetaUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBetaUsersQuery = {
  listBetaUsers?:  {
    __typename: "ModelBetaUserConnection",
    items:  Array< {
      __typename: "BetaUser",
      id: string,
      storeName: string,
      storeAddress: string,
      emailAddress: string,
      Date: string,
      description?: string | null,
      currentWebsite: string,
      currentWebsiteArchitecture?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBetaUserSubscription = {
  onCreateBetaUser?:  {
    __typename: "BetaUser",
    id: string,
    storeName: string,
    storeAddress: string,
    emailAddress: string,
    Date: string,
    description?: string | null,
    currentWebsite: string,
    currentWebsiteArchitecture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBetaUserSubscription = {
  onUpdateBetaUser?:  {
    __typename: "BetaUser",
    id: string,
    storeName: string,
    storeAddress: string,
    emailAddress: string,
    Date: string,
    description?: string | null,
    currentWebsite: string,
    currentWebsiteArchitecture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBetaUserSubscription = {
  onDeleteBetaUser?:  {
    __typename: "BetaUser",
    id: string,
    storeName: string,
    storeAddress: string,
    emailAddress: string,
    Date: string,
    description?: string | null,
    currentWebsite: string,
    currentWebsiteArchitecture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
