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
     scenarios: async () => await prisma.scenarios({}),
     keywords: async () => await prisma.keywords({}),
     descriptorses: async () => await prisma.descriptorses({}),
     events: async (orderBy) => await prisma.events({orderBy: 'title_ASC'}) 
  },
  
  Mutation: {
    createIndicator: async (_, {data}) => {
       return await prisma.createIndicator({title: data.title}) 
    },
    createScenario: async (_, {data}) => {
      return await prisma.createScenario({title: data.title, description: data.description})
    },
    createKeyword: async (_, {data}) => {
      return await prisma.createKeyword({searchterm: data.searchterm})
    },
    createDescriptors: async (_, {data}) => {
      return await prisma.createDescriptors({tag: data.tag})
    },
    updateKeyword: async (_, {data, where}) => {
      return await prisma.updateKeyword({data: {searchterm: data.searchterm}, where: {id: where.id}})  
    },
    deleteKeyword: async (_, {where}) => {
      return await prisma.deleteKeyword({id: where.id})
    },
    
    
    
  }
  
  ,
     Node: {
    __resolveType() {
      return null;
    }
  }
  
  
}

module.exports = resolvers