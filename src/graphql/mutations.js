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
      organization
      items {
        id
        name
        description
        img
      }
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
      organization
      items {
        id
        name
        description
        img
      }
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
      organization
      items {
        id
        name
        description
        img
      }
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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
