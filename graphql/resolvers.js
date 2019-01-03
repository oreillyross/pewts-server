const { prisma } = require("../generated/prisma-client");
const {
  GraphQLEmail,
  GraphQLURL,
  GraphQLDateTime,
  GraphQLLimitedString,
  GraphQLPassword,
  GraphQLUUID
} = require("graphql-custom-types");

const resolvers = {
  DateTime: GraphQLDateTime,

  Query: {
    indicators: async () => await prisma.indicators({}),
    scenarios: async () => await prisma.scenarios({}),
    keywords: async () => await prisma.keywords({}),
    descriptors: async () => await prisma.descriptors({}),
    events: async orderBy => await prisma.events({ orderBy: "title_ASC" }),
    event: async (_, { where }) => await prisma.event({ id: where.id })
  },

  Mutation: {
    createEvent: async (_, { data }) => {
      return await prisma.createEvent({
        title: data.title,
        description: data.description,
        crawlDate: data.crawlDate
      });
    },
    createIndicator: async (_, { data }) => {
      return await prisma.createIndicator({ title: data.title });
    },
    createScenario: async (_, { data }) => {
      return await prisma.createScenario({
        title: data.title,
        description: data.description
      });
    },
    createKeyword: async (_, { data }) => {
      return await prisma.createKeyword({ searchterm: data.searchterm });
    },
    createDescriptor: async (_, { data }) => {
      return await prisma.createDescriptor({ tag: data.tag });
    },
    connectDescriptors: async (_, { data, where }) => {
      return await prisma.createEvent({
        title: "my new event",
        description: "my new description",
        crawlDate: new Date().toISOString(),
        descriptors: {
          create: {
            tag: "Roo"
          }
        }
      });
    },
    updateEvent: async (_, { data, where }) => {
      return await prisma.updateEvent({
        data: {
          title: data.title,
          description: data.description,
          crawlDate: data.crawlDate,
          source: "my source",
          descriptors: { create: { tag: "Roo" } }
        },
        where: { id: where.id }
      });
    },
    updateKeyword: async (_, { data, where }) => {
      return await prisma.updateKeyword({
        data: { searchterm: data.searchterm },
        where: { id: where.id }
      });
    },
    updateScenario: async (_, { data, where }) => {
      return await prisma.updateScenario({
        data: { title: data.title },
        where: { id: where.id }
      });
    },
    deleteKeyword: async (_, { where }) => {
      return await prisma.deleteKeyword({ id: where.id });
    },
    deleteScenario: async (_, { where }) => {
      return await prisma.deleteScenario({ id: where.id });
    }
  },

  Node: {
    __resolveType() {
      return null;
    }
  }
};

module.exports = resolvers;
