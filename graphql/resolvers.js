const { prisma } = require('../generated/prisma-client')
const {
  GraphQLEmail,
  GraphQLURL,
  GraphQLDateTime,
  GraphQLLimitedString,
  GraphQLPassword,
  GraphQLUUID
} = require('graphql-custom-types');

const resolvers = {
  
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

module.exports = resolvers