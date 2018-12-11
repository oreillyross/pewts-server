import { GraphQLServer} from 'graphql-yoga'
import { typeDefs } from './graphql/types'
import { resolvers } from './graphql/resolvers'
import { makeExecutableSchema } from 'graphql-tools';

export const schema = makeExecutableSchema({
   typeDefs,
   resolvers,
 });



const opts = {
  endpoint: '/graphql'
}

const server = new GraphQLServer({
  schema,
  opts
})

server.start({ port: process.env.PORT || 8080 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})