/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePortal = /* GraphQL */ `
  subscription OnCreatePortal {
    onCreatePortal {
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
export const onUpdatePortal = /* GraphQL */ `
  subscription OnUpdatePortal {
    onUpdatePortal {
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
export const onDeletePortal = /* GraphQL */ `
  subscription OnDeletePortal {
    onDeletePortal {
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
