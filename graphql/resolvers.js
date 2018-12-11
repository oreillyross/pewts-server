const { prisma } = require('../generated/prisma-client')
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
     indicators: async () => await prisma.indicators({})
  },
  
  Mutation: {
    createIndicator: async (_, {data}) => {
       return await prisma.createIndicator({title: data.title}) 
    }
    
  }
  
  ,
     Node: {
    __resolveType() {
      return null;
    }
  }
  
  
}