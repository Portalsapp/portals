/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPortal = /* GraphQL */ `
  query GetPortal($id: ID!) {
    getPortal(id: $id) {
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
export const listPortals = /* GraphQL */ `
  query ListPortals(
    $filter: ModelPortalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEntity = /* GraphQL */ `
  query GetEntity($id: ID!) {
    getEntity(id: $id) {
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
export const listEntitys = /* GraphQL */ `
  query ListEntitys(
    $filter: ModelEntityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
