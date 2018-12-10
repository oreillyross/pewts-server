import {
  GraphQLEmail,
  GraphQLURL,
  GraphQLDateTime,
  GraphQLLimitedString,
  GraphQLPassword,
  GraphQLUUID
} from 'graphql-custom-types';

export const resolvers = {
  
  DateTime: GraphQLDateTime,
  
  Query: {
     hello:  async (_, { name }) => `Hello ${name || 'World'}`,
  }
  
  
}