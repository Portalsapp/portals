export interface GraphQLResult {
  data?: object;
  errors?: [object];
  extensions?: {
    [key: string]: any;
  };
}
