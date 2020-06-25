/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      organization
      items {
        id
        name
        description
        img
      }
      location
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
        organization
        items {
          id
          name
          description
          img
        }
        location
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
      id
      name
      items {
        id
        name
        description
        img
      }
      connectedUsers {
        id
        name
        email
        organization
        items {
          id
          name
          description
          img
        }
        location
        createdAt
        updatedAt
      }
      connectedOrganizations {
        id
        name
        email
        organization
        items {
          id
          name
          description
          img
        }
        location
        createdAt
        updatedAt
      }
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
        id
        name
        items {
          id
          name
          description
          img
        }
        connectedUsers {
          id
          name
          email
          organization
          location
          createdAt
          updatedAt
        }
        connectedOrganizations {
          id
          name
          email
          organization
          location
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
