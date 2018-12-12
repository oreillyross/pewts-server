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
     indicators: async () => await prisma.indicators({}),
     scenarios: async () => await prisma.scenarios({})
  },
  
  Mutation: {
    createIndicator: async (_, {data}) => {
       return await prisma.createIndicator({title: data.title}) 
    },
    createScenario: async (_, {data}) => {
      return await prisma.createScenario({title: data.title, description: data.description})
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