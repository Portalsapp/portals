/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      token
      accountBalance
      isOrganization
      username
      phoneNumber
      age
      address
      inventory {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      joinedPortals
      friends
      profilePic
      orderHistory
      ownedPortals
      financialInfo
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      token
      accountBalance
      isOrganization
      username
      phoneNumber
      age
      address
      inventory {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      joinedPortals
      friends
      profilePic
      orderHistory
      ownedPortals
      financialInfo
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      token
      accountBalance
      isOrganization
      username
      phoneNumber
      age
      address
      inventory {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      joinedPortals
      friends
      profilePic
      orderHistory
      ownedPortals
      financialInfo
      createdAt
      updatedAt
    }
  }
`;
export const createPortal = /* GraphQL */ `
  mutation CreatePortal(
    $input: CreatePortalInput!
    $condition: ModelPortalConditionInput
  ) {
    createPortal(input: $input, condition: $condition) {
      name
      token
      username
      publisherName
      description
      platforms
      connections
      public
      physicalConnections
      portalConnections
      children
      socialMediaConnections
      itemSchemas {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      connectionRewards {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      profilePic
      mediaImages
      bankAccount
      createdAt
      updatedAt
    }
  }
`;
export const updatePortal = /* GraphQL */ `
  mutation UpdatePortal(
    $input: UpdatePortalInput!
    $condition: ModelPortalConditionInput
  ) {
    updatePortal(input: $input, condition: $condition) {
      name
      token
      username
      publisherName
      description
      platforms
      connections
      public
      physicalConnections
      portalConnections
      children
      socialMediaConnections
      itemSchemas {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      connectionRewards {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      profilePic
      mediaImages
      bankAccount
      createdAt
      updatedAt
    }
  }
`;
export const deletePortal = /* GraphQL */ `
  mutation DeletePortal(
    $input: DeletePortalInput!
    $condition: ModelPortalConditionInput
  ) {
    deletePortal(input: $input, condition: $condition) {
      name
      token
      username
      publisherName
      description
      platforms
      connections
      public
      physicalConnections
      portalConnections
      children
      socialMediaConnections
      itemSchemas {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      connectionRewards {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      profilePic
      mediaImages
      bankAccount
      createdAt
      updatedAt
    }
  }
`;
export const createEntity = /* GraphQL */ `
  mutation CreateEntity(
    $input: CreateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    createEntity(input: $input, condition: $condition) {
      name
      token
      username
      location
      publisherName
      description
      platforms
      connections
      public
      physicalConnections
      portalConnections
      children
      socialMediaConnections
      itemSchemas {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      connectionRewards {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      profilePic
      mediaImages
      bankAccount
      autoAcceptConnections
      hashtags
      merchants
      merchantAPIKeys
      createdAt
      updatedAt
    }
  }
`;
export const updateEntity = /* GraphQL */ `
  mutation UpdateEntity(
    $input: UpdateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    updateEntity(input: $input, condition: $condition) {
      name
      token
      username
      location
      publisherName
      description
      platforms
      connections
      public
      physicalConnections
      portalConnections
      children
      socialMediaConnections
      itemSchemas {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      connectionRewards {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      profilePic
      mediaImages
      bankAccount
      autoAcceptConnections
      hashtags
      merchants
      merchantAPIKeys
      createdAt
      updatedAt
    }
  }
`;
export const deleteEntity = /* GraphQL */ `
  mutation DeleteEntity(
    $input: DeleteEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    deleteEntity(input: $input, condition: $condition) {
      name
      token
      username
      location
      publisherName
      description
      platforms
      connections
      public
      physicalConnections
      portalConnections
      children
      socialMediaConnections
      itemSchemas {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      connectionRewards {
        name
        token
        isVirtual
        description
        pic
        compatability
      }
      profilePic
      mediaImages
      bankAccount
      autoAcceptConnections
      hashtags
      merchants
      merchantAPIKeys
      createdAt
      updatedAt
    }
  }
`;
