export interface GraphQLResult {
  data?: object;
  errors?: [object];
  extensions?: {
    [key: string]: any;
  };
}

export interface User {
  id?: string,
  name: string,
  email: string,
  organization: Boolean,
  items: Item[],
  location: string,
}

export interface Item {
  id: string,
  name: string,
  description: string,
  img: string,
}

export interface Portal {
  id: string,
  name: string,
  items: Item[],
  connectedUsers?: User[],
  connectedOrganizations?: User[],
}